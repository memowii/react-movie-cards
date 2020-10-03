import React from "react";

interface MovieCardWrapperProps {
  children: JSX.Element;
}

export const MovieCardWrapper: React.FC<MovieCardWrapperProps> = ({
  children,
}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 py-4">{children}</div>
  );
};
