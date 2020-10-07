import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { MovieCard } from "./MovieCard/index";
import { MovieCardWrapper } from "./MovieCardWrapper";
import { externalMoviesService } from "../services/MovieService";

const moviesIterator = externalMoviesService.getMoviesIterator(8);
const initialMovies = moviesIterator.next().value;

export const ExternalMovieCardsContainer = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [hasMoreMovies, setHasMoreMovies] = useState(true);

  const getNextMovies = () => {
    const nextMovies = moviesIterator.next();
    if (!nextMovies.done) {
      setMovies((prevMovies: any) => [...prevMovies, ...nextMovies.value]);
    } else {
      setHasMoreMovies(false);
    }
  };

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={getNextMovies}
      hasMore={hasMoreMovies}
      loader={<h4>Loading...</h4>}
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
