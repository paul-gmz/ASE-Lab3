import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {IUser} from './user';

@Injectable()
export class AuthGuard implements CanActivate {
  user: IUser;
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(localStorage.getItem('user'));
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user !== null) { // user is signed in
      console.log('true');
      return true;
    }

    console.log('false');
    // redirect to sign in/register
    this.router.navigate(['auth']);
    return false;
  }
}
