import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trendingmovies',
  templateUrl: './trendingmovies.component.html',
  styleUrls: ['./trendingmovies.component.scss']
})
export class TrendingmoviesComponent {
  trendingMovies: any;
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.getTrendingMovies();
  }
  getTrendingMovies() {
    this.http
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((movies) => {
        this.trendingMovies = movies;
      });
  }
}
