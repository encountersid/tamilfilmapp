import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.scss']
})
export class MainheaderComponent {
  constructor(private router:Router)
  {}
  logout()
  {
     this.router.navigate(['login']);
  }
}
