import movies from "./movies.json";
import { Movie } from "../interfaces/Movie";

export default class MovieService {
  static getMovies(): Movie[] {
    return movies ? movies : [];
  }
}
