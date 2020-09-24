const fs = require("fs");
const axios = require("axios");
const querystring = require("querystring");

function setApi(apikey) {
  return function (obj) {
    obj.apikey = apikey;

    obj["t"] = obj["title"];
    delete obj["title"];

    obj["y"] = obj["year"];
    delete obj["year"];

    return "?" + querystring.stringify(obj);
  };
}

// This is an example of how a request should look:
// http://www.omdbapi.com/?apikey=e0d2283&t=Reservoir+Dogs&y=1992
const API_URL = "http://www.omdbapi.com";
const API_KEY = "e0d2283";
axios.defaults.baseURL = API_URL;
axios.defaults.timeout = 1200;

const formApiQuery = setApi(API_KEY);

const rawData = fs.readFileSync(__dirname + "/imdbMoviesFromHTMLSource.json");
const moviesData = JSON.parse(rawData);
const movies3 = moviesData.slice(0, 3);

async function getMoviesData(simpleMovies) {
  try {
    const responds = await Promise.all(
      moviesData
        .map((movie) => formApiQuery(movie))
        .map((query) => axios.get(query))
    );

    const data = JSON.stringify(responds.map((respond) => respond.data));
    fs.writeFileSync(__dirname + "/imdbMoviesFromAPI.json", data);
  } catch (error) {
    console.log(error);
  }
}

getMoviesData();
