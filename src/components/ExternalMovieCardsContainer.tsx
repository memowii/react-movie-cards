import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { MovieCard } from "./MovieCard/index";
import { MovieCardWrapper } from "./MovieCardWrapper";
import { externalMoviesService } from "../services/MovieService";

const moviesIterator = externalMoviesService.getMoviesIterator(8);
const __movies = moviesIterator.next().value;

export const ExternalMovieCardsContainer = () => {
  const [movies, setMovies] = useState(__movies);
  const [hasMoreMovies, setHasMoreMovies] = useState(true);

  const getNextMovies = () => {
    const _movies = moviesIterator.next();
    if (!_movies.done) {
      setMovies((prevMovies: any) => [...prevMovies, ..._movies.value]);
    } else {
      console.log("no more movies", movies.length);

      setHasMoreMovies(false);
    }
  };

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={getNextMovies}
      hasMore={hasMoreMovies}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      className="row"
    >
      {movies.map((movie: any) => {
        return (
          <React.Fragment key={movie.id}>
            <MovieCardWrapper>
              <MovieCard
                src={movie.imageUrl}
                alt={movie.title}
                title={movie.title}
                subtitle={movie.subtitle}
                description={movie.description}
                rating={4.5}
              />
            </MovieCardWrapper>
          </React.Fragment>
        );
      })}
    </InfiniteScroll>
  );
};
