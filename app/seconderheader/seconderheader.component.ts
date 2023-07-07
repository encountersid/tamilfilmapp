import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seconderheader',
  templateUrl: './seconderheader.component.html',
  styleUrls: ['./seconderheader.component.scss']
})
export class SeconderheaderComponent {
   constructor(private router:Router)
   {}
   logout()
   {
     this.router.navigate(['login']);
   }
   goback()
   {
     this.router.navigate(['welcomeopts']);
   }
}
