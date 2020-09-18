import React, { useState } from "react";

import MovieService from "../../services/MovieService";
import { Movie } from "../../interfaces/Movie";
import { MovieCard } from "../../components/MovieCard";

import m1Img from '../../images/Kingsglaive_Final_Fantasy_XV.jpg'

export const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>(MovieService.getMovies);
  const m1 = movies[0];

  return (
    <div className="container">
      <h1>home</h1>
      <MovieCard
        src={m1Img}
        alt={m1.title}
        title={m1.title}
        subtitle={m1.subtitle}
        description={m1.description}
        rating={3.5}
      />
    </div>
  );
};
