import localMovies from "./movies.json";
import externalMovies from "./imdbMoviesFromAPI.json";
import { Movie } from "../interfaces/Movie";
import { chunk } from "lodash";

abstract class MovieService {
  constructor(public movies: Movie[] | any[]) {}

  abstract getMovies(): Movie[];
}

class LocalMovieService extends MovieService {
  constructor(movies: Movie[]) {
    super(movies);
  }

  getMovies(): Movie[] {
    return this.movies ? this.movies : [];
  }
}

class ExternalMovieService extends MovieService {
  constructor(movies: Movie[] | any[]) {
    super(movies);
    this.movies = this.changeMoviesForm(this.movies);
  }

  getMovies(): Movie[] {
    return this.movies ? this.movies : [];
  }

  private changeMoviesForm(movies: any[]): Movie[] {
    return (this.movies as any[]).map((movie: any) => ({
      id: movie.imdbID,
      title: movie.Title,
      subtitle: movie.Title,
      description: movie.Plot,
      year: movie.Year,
      imageUrl: movie.Poster,
      rating: movie.imdbRating,
    }));
  }

  getMoviesIterator(itemsPerPage: number) {
    const dividedMovies = chunk(this.movies, itemsPerPage);

    const iterator = {
      from: 0,
      to: dividedMovies.length - 1,

      [Symbol.iterator]() {
        this.current = this.from;
        return this;
      },

      next() {
        if (this.current <= this.to) {
          return { done: false, value: dividedMovies[this.current++] };
        } else {
          return { done: true };
        }
      },
    } as any;

    return iterator[Symbol.iterator]();
  }
}

const localMoviesService = new LocalMovieService(localMovies);
const externalMoviesService = new ExternalMovieService(externalMovies as any[]);
const moviesIterator = externalMoviesService.getMoviesIterator(8);

console.log(moviesIterator.next());
console.log(moviesIterator.next());

export default localMoviesService;
