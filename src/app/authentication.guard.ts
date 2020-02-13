import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let authenticatedUser = JSON.parse(
      sessionStorage.getItem("isAuthenticated")
    );
    if (authenticatedUser !== null && authenticatedUser.isLoggedIn) {
      return true;
    }
    this.router.navigate(["/signin"]);
    return false;
  }
}
