import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark py-3">
      <div className="container">
        <div className="row m-auto">
          <FontAwesomeIcon icon={faFilm} size="4x" className="text-white" />
          <div className="h1 ml-3 my-auto text-light" href="/">
            React Movie Cards
          </div>
        </div>
      </div>
    </nav>
  );
}
