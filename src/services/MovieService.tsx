import movies from "./movies.json";

interface Movie {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  year: number;
  imageUrl: string;
  rating: number;
}

export default class MovieService {
  static getMovies(): Movie[] {
    return movies ? movies : [];
  }
}
