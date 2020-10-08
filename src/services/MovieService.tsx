import localMovies from "./movies.json";
import externalMovies from "./imdbMoviesFromAPI.json";
import { Movie } from "../interfaces/Movie";
import { chunk } from "lodash";

abstract class MovieService {
  constructor(public movies: Movie[] | any[]) {}

  abstract getMovies(): Movie[];
}

class LocalMovieService extends MovieService {
  getMovies(): Movie[] {
    return this.movies ? this.movies : [];
  }
}

interface IteratorResult<T> {
  done: boolean;
  value: T;
}

class MovieIterator implements IterableIterator<Movie[]> {
  private from: number = 0;
  private to: number;
  private current: number;
  private movies: Movie[][];

  constructor(movies: Movie[][]) {
    this.movies = movies;
    this.to = this.movies.length - 1;
    this.current = this.from;
  }

  [Symbol.iterator](): IterableIterator<Movie[]> {
    return this;
  }

  next(): IteratorResult<Movie[]> {
    if (this.current <= this.to) {
      return { done: false, value: this.movies[this.current++] };
    } else {
      return { done: true, value: null as any };
    }
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
      rating: this.adjustImdbRating(movie.imdbRating),
    }));
  }

  private adjustImdbRating(rating: string): number {
    return +rating > 5 ? +(+rating - 5).toFixed(1) : +rating;
  }

  getMoviesIterator(itemsPerPage: number): MovieIterator {
    const chunkedMovies: Movie[][] = chunk(this.movies, itemsPerPage);
    return new MovieIterator(chunkedMovies);
  }
}

const localMoviesService = new LocalMovieService(localMovies);
const externalMoviesService = new ExternalMovieService(externalMovies as any[]);

export { localMoviesService, externalMoviesService };
