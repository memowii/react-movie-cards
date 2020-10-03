import React, { useState } from "react";

import { LocalMovieCardsContainer } from "../../components/LocalMovieCardsContainer";

export const Home: React.FC = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <LocalMovieCardsContainer />
      </div>
    </div>
  );
};
