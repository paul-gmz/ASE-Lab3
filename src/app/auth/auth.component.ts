import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  user: IUser;
  isRegister = false;
  message = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }


  ngOnInit(): void {}

  displaySignIn(): void {
    this.message = '';
    this.isRegister = false;
  }

  signIn(): void {
    this.message = '';
    if (this.email === '' || this.password === '') {
      this.message = 'Please fill out your email and password';
    } else {
      this.user = JSON.parse(localStorage.getItem(this.email));
      if (this.user == null) {
        this.message = 'Invalid credentials';
      } else if (this.user.password !== this.password) {
        this.message = 'Invalid credentials';
      } else {
        this.message = 'You are good';
      }
    }
  }

  displayRegister(): void {
    this.message = '';
    this.isRegister = true;
  }
  
  register(): void {
    this.message = '';
    if (this.name === '' || this.email === '' || this.password === '') {
      this.message = 'Please fill out all the above information to register';
    } else {
      this.user = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      localStorage.setItem(this.email, JSON.stringify(this.user));
      this.email = '';
      this.name = '';
      this.password = '';
      this.message = 'You have successfully registered';
    }
  }
}
