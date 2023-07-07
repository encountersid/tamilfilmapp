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
      
        if(this.username == 'encounter_sid' && this.password == 'Sid2831$')
       {
          this.router.navigate(['/welcomeopts']);
       }
       else
       {
           alert('Invalid Credentials');
       }
     }
  }
