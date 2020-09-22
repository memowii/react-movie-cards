const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "./view-source_https___www.imdb.com_chart_top__ref_=nv_mv_250.html"
);

const imdbHTMLSource = fs.readFileSync(filePath, { encoding: "utf8" });

const $ = cheerio.load(imdbHTMLSource);

const tableRows = $("table.chart tbody.lister-list tr", ".lister");

const movies = [];

tableRows.each(function (index, element) {
  const rowTds = $(this).children();
  const titleColumnTd = rowTds[1];
  const anchor = $(titleColumnTd).find("a");
  const movieTitle = $(anchor).text();
  const span = $(titleColumnTd).find("span");
  const movieYear = span.text();

  const movieObj = {
    title: cleanTitle(movieTitle),
    year: movieYear.slice(1, 5),
  };

  movies.push(movieObj);
});

const data = JSON.stringify(movies);
fs.writeFileSync(__dirname + "/imdbMoviesFromHTMLSource.json", data);


const titleTest = [
  "The",
  "Shawshank\n",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "Redemption\n",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

function cleanTitle(title) {
  return title
    .split(" ")
    .filter((word) => word !== "")
    .map((word) => word.replace("\n", ""))
    .join(" ");
}
