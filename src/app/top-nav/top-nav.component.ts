import { Component } from '@angular/core';
import {IUser} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

  title = 'Nutrition Facts';
  user: IUser = null;

  constructor( private router: Router ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log('User' + this.user);
  }

  signOut() {
    localStorage.setItem('user', null);
    this.router.navigate(['auth']);
  }
}
