import React from "react";

import { StarRating } from "./../StarRating";

interface MovieCardProps {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  rating: number;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  src,
  alt,
  title,
  subtitle,
  description,
  rating,
}) => (
  <div className="card">
    <img src={src} className="card-img-top" alt={alt} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
      <p className="card-text text-justify">{description}</p>
    </div>
    <div className="card-footer">
      <div className="d-flex align-items-center justify-content-between px-2">
        <StarRating rating={rating} />
        <span className="badge badge-pill badge-primary">
          <h5 className="mb-0">{rating}</h5>
        </span>
      </div>
    </div>
  </div>
);
