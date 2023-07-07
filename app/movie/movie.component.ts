import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {

    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }
    if (this.type === 'upcoming') {
      this.url = 'http://localhost:4200/assets/data/upcoming-movies.json';
    }
    if (this.type === 'myfavourites') {
      this.url = 'http://localhost:4200/assets/data/myfavourites.json';
    }
    if(this.type == 'bestof2022')
    {
       this.url = 'http://localhost:4200/assets/data/bestof2022-movies.json'
    }
  }
}
