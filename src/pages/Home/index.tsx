import React from "react";

import MovieService from "../../services/MovieService";

export function Home() {
  const moviesData =  MovieService.getMovies();

  return (
    <div className="container">
      
    </div>
  );
}
