import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDivide,
  faStar as fullFaStar,
  faStarHalfAlt,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as outlineFaStar } from "@fortawesome/free-regular-svg-icons";

interface StarRatingProps {
  rating: number;
}

let idx: number = 0;

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => (
  <div className="StarRating">{renderStars(rating)}</div>
);

const figureStarsForm = (n: number): [number, number, number] => {
  const numOfFilledStars = Math.round(n);
  const decimalPart = Math.abs(numOfFilledStars - n);
  const numOfHalfStars = decimalPart >= 0.5 ? 1 : 0;
  const numOfEmptyStars = 5 - numOfFilledStars - numOfHalfStars;

  return [numOfFilledStars, numOfHalfStars, numOfEmptyStars];
};

const renderStar = (
  n: number,
  FAIcon: IconDefinition
): React.ReactElement[] => {
  return new Array(n).fill(1).map(() => {
    return (
      <Fragment key={idx++}>
        {<FontAwesomeIcon icon={FAIcon} size="lg" />}
        {/* This is another solution {React.cloneElement(Icon, { key: '1'})} */}
      </Fragment>
    );
  });

  // Alternative way to make it work.
  // return new Array(n).fill(1).map((_, i) => (<div key={i}> {Icon} </div>));
};

const renderStars = (rating: number): React.ReactElement => {
  const [numOfFilledStars, numOfHalfStars, numOfEmptyStars] = figureStarsForm(
    rating
  );

  return (
    <>
      {renderStar(numOfFilledStars, fullFaStar)}

      {renderStar(numOfHalfStars, faStarHalfAlt)}

      {renderStar(numOfEmptyStars, outlineFaStar)}
    </>
  );
};
