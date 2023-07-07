import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username:string;
  password:string;
  constructor(private router:Router)
  {
  }
  login()
  {
    if(this.username == 'admin' && this.password == 'admin')
    {
      this.router.navigate(['/welcomepage']);
    }
    else
    {
       alert("Invalid Login");
    } 
  }
}
