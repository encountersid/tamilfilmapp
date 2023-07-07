import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myfavoritefilms',
  templateUrl: './myfavoritefilms.component.html',
  styleUrls: ['./myfavoritefilms.component.scss']
})
export class MyfavoritefilmsComponent {
  myfavoriteMovies: any;
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.getMyFavoriteMovies();
  }
  getMyFavoriteMovies() {
    this.http
      .get('http://localhost:4200/assets/data/myfavourites.json')
      .subscribe((movies) => {
        this.myfavoriteMovies = movies;
      });
  }
  goToMovie(type: string, id: string) {
    this.router.navigate(['myfavoritefilms', type, id]);
  }
}
