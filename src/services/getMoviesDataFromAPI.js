const fs = require("fs");
const axios = require("axios");
const querystring = require("querystring");

function x(apikey) {

  return function x2(obj) {
    obj.apikey = apikey;
    obj["t"] = obj["title"];
    delete obj["title"];
    obj["y"] = obj["year"];
    delete obj["year"];

    return querystring.stringify(obj);
  };
}

// const API_URL = "http://www.omdbapi.com/?apikey=e0d2283&t=Reservoir+Dogs&y=1992";
const API_URL = "http://www.omdbapi.com";
const API_KEY = "e0d2283";
axios.defaults.baseURL = API_URL;
axios.defaults.timeout = 1200;

const rawData = fs.readFileSync(__dirname + "/imdbMoviesFromHTMLSource.json");
const moviesData = JSON.parse(rawData);

const movies3 = moviesData.slice(0, 3);

const xx = x(API_KEY);
console.log(xx(movies3[0]));

// process.exit();

async function getMoviesData(simpleMovies) {
  const moviesData = simpleMovies.map(async (movie) => {});
}

axios
  // .get("?apikey=e0d2283&t=Reservoir+Dogs&y=1992")
  .get("?apikey=e0d2283&t=The%20Shawshank%20Redemption&y=1994")
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
// .then(function () {
//   // always executed
// });
