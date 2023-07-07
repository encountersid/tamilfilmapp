import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trendingfilms',
  templateUrl: './trendingfilms.component.html',
  styleUrls: ['./trendingfilms.component.scss']
})
export class TrendingfilmsComponent {
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
  goToMovie(type: string, id: string) {
    this.router.navigate(['trendingfilms', type, id]);
  }
}
