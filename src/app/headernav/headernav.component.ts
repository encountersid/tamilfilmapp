import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.scss']
})
export class HeadernavComponent {
  constructor(private router:Router)
  {}
  logout()
  {
     this.router.navigate(['login']);
  }
  goback()
  {
     this.router.navigate(['welcomepage']);
  }
}
