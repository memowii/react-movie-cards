import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as fullFaStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as outlineFaStar } from "@fortawesome/free-regular-svg-icons";

import { numberToStringFloat } from "../../utils/numberToStringFloat";

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="StarRating">
      <FontAwesomeIcon icon={fullFaStar} size="2x" />
      <FontAwesomeIcon icon={fullFaStar} size="2x" />
      <FontAwesomeIcon icon={fullFaStar} size="2x" />
      <FontAwesomeIcon icon={faStarHalfAlt} size="2x" />
      <FontAwesomeIcon icon={outlineFaStar} size="2x" />
    </div>
  );
};

const figureStarsForm = (n: string): [number, boolean] => {
  const [wholePart, decimalPart] = n.split(".");
  const numOfStars = parseInt(wholePart);
  const shouldAddNewStar = parseInt(decimalPart[0]) > 5 ? true : false;

  return [numOfStars, shouldAddNewStar];
};
