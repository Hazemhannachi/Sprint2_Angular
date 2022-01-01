import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  user = new User();
  err:number = 0;

  constructor(private authService : AuthentificationService,
              private router: Router
    ) { }

  ngOnInit(): void {
  }


  onLoggedin()
  {
  this.authService.login(this.user).subscribe((data)=> {
  let jwToken = data.headers.get('Authorization');
  this.authService.saveToken(jwToken);
  this.router.navigate(['/']);
  },(err)=>{ this.err = 1;
  });
  }
}
