import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      name: 'Movie 1',
      genre: 'Action',
      description: 'This is movie 1.',
    },
    {
      id: 2,
      title: 'Movie 2',
      genre: 'Comedy',
      description: 'This is movie 2.',
    },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie {
    return this.movies.find(movie => movie.id === id);
  }
}
