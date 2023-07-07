import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcomingfilms',
  templateUrl: './upcomingfilms.component.html',
  styleUrls: ['./upcomingfilms.component.scss']
})
export class UpcomingfilmsComponent {
  upcomingMovies: any;
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.getUpcomingMovies();
  }
  getUpcomingMovies() {
    this.http
      .get('http://localhost:4200/assets/data/upcoming-movies.json')
      .subscribe((movies) => {
        this. upcomingMovies = movies;
      });
  }
  goToMovie(type: string, id: string) {
    this.router.navigate(['upcomingfilms', type, id]);
  }
}
