import React, { useState, useEffect } from "react";

import { LocalMovieCardsContainer } from "../../components/LocalMovieCardsContainer";
import { ExternalMovieCardsContainer } from "../../components/ExternalMovieCardsContainer";

// I think this function will be better used when this app is a PWA.
// Otherwise, when the app is used in offline mode, it won't give
// the expected results, that it loads the LocalMovieCardsContainer
// component.
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
