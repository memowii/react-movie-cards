import localMovies from "./movies.json";
import externalMovies from "./imdbMoviesFromAPI.json";
import { Movie } from "../interfaces/Movie";
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
}

const localMoviesService = new LocalMovieService(localMovies);
const externalMoviesService = new ExternalMovieService(externalMovies as any[]);
console.log("externalMoviesService", externalMoviesService.getMovies());

export default localMoviesService;
