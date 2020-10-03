import React from "react";
import { MovieCard } from "./MovieCard/index";
import { MovieCardWrapper } from "./MovieCardWrapper";

import { localMoviesService } from "../services/MovieService";

import m1Img from "../images/Kingsglaive_Final_Fantasy_XV.jpg";
import m2Img from "../images/Final_Fantasy_Spirits_Within.jpg";
import m3Img from "../images/Ghost_In_The_Shell_2_0.jpg";
import m4Img from "../images/Appleseed_Alpha.jpg";
import m5Img from "../images/Resident_Evil_Vendetta.jpg";

export const LocalMovieCardsContainer = () => {
  const movies = localMoviesService.getMovies();

  return (
    <>
      <MovieCardWrapper>
        <MovieCard
          src={m1Img}
          alt={movies[0].title}
          title={movies[0].title}
          subtitle={movies[0].subtitle}
          description={movies[0].description}
          rating={4.5}
        />
      </MovieCardWrapper>
      <MovieCardWrapper>
        <MovieCard
          src={m2Img}
          alt={movies[1].title}
          title={movies[1].title}
          subtitle={movies[1].subtitle}
          description={movies[1].description}
          rating={movies[1].rating}
        />
      </MovieCardWrapper>
      <MovieCardWrapper>
        <MovieCard
          src={m3Img}
          alt={movies[2].title}
          title={movies[2].title}
          subtitle={movies[2].subtitle}
          description={movies[2].description}
          rating={movies[2].rating}
        />
      </MovieCardWrapper>
      <MovieCardWrapper>
        <MovieCard
          src={m4Img}
          alt={movies[3].title}
          title={movies[3].title}
          subtitle={movies[3].subtitle}
          description={movies[3].description}
          rating={movies[3].rating}
        />
      </MovieCardWrapper>
      <MovieCardWrapper>
        <MovieCard
          src={m5Img}
          alt={movies[3].title}
          title={movies[3].title}
          subtitle={movies[3].subtitle}
          description={movies[3].description}
          rating={movies[3].rating}
        />
      </MovieCardWrapper>
    </>
  );
};
