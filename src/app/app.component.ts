import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'MiniProjet';

  constructor(
    public authService: AuthentificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.loadToken();
    if (
      this.authService.getToken() == null ||
      this.authService.isTokenExpired()
    )
      this.router.navigate(['/login']);
  }

  onLogout() {
    this.authService.logout();
  }
}
