import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bestof2022',
  templateUrl: './bestof2022.component.html',
  styleUrls: ['./bestof2022.component.scss']
})
export class Bestof2022Component {
  bestof2022movies: any;
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.getBestof2022Movies();
  }
  getBestof2022Movies() {
    this.http
      .get('http://localhost:4200/assets/data/bestof2022-movies.json')
      .subscribe((movies) => {
        this.bestof2022movies = movies;
      });
  }
  goToMovie(type: string, id: string) {
    this.router.navigate(['bestof2022movies', type, id]);
  }
}
