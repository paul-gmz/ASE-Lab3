import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'routing';
  user;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.currentUser.subscribe(x => this.user = x);
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }
}
