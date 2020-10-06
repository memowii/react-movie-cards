import React, { useState, useEffect } from "react";

import { LocalMovieCardsContainer } from "../../components/LocalMovieCardsContainer";
import { ExternalMovieCardsContainer } from "../../components/ExternalMovieCardsContainer";

const checkOnlineStatus = async () => {
  try {
    const online = await fetch("/logo192.png");
    return online.status >= 200 && online.status < 300; // either true or false
  } catch (err) {
    return false;
  }
};

export const Home: React.FC = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    (async () => {
      const isOnline = await checkOnlineStatus();
      setIsOnline(isOnline);
    })();
  });

  return (
    <div className="container my-4">
      {!isOnline ? (
        <div className="row">
          <LocalMovieCardsContainer />
        </div>
      ) : (
        <ExternalMovieCardsContainer />
      )}
    </div>
  );
};
