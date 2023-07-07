import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myfavmovies',
  templateUrl: './myfavmovies.component.html',
  styleUrls: ['./myfavmovies.component.scss']
})
export class MyfavmoviesComponent {
  myfavoriteMovies: any;
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.getMyFavoriteMovies();
  }
  getMyFavoriteMovies() {
    this.http
      .get('http://localhost:4200/assets/data/myfavoritemovies.json')
      .subscribe((movies) => {
        this.myfavoriteMovies = movies;
      });
  }
  goToMovie(type: string, id: string) {
    this.router.navigate(['myfavoritemovies', type, id]);
  }
}
