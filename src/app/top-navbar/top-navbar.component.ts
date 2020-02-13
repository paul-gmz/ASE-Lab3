import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-top-navbar",
  templateUrl: "./top-navbar.component.html",
  styleUrls: ["./top-navbar.component.css"]
})
export class TopNavbarComponent implements OnInit {
  title: string = "Nutrition Facts";
  isAuthenticated: boolean = false;
  user: string = "";

  constructor(private router: Router) {}

  ngOnInit() {}

  onActivate(component) {
    let authenticatedUser = JSON.parse(
      sessionStorage.getItem("isAuthenticated")
    );

    if (authenticatedUser !== null && authenticatedUser.isLoggedIn) {
      this.isAuthenticated = true;
      let userEmail = authenticatedUser.email;
      this.user = JSON.parse(localStorage.getItem(userEmail)).name;
    }
  }

  logOut(): void {
    sessionStorage.clear();
    this.isAuthenticated = false;
    this.user = "";
    this.router.navigate(["/signin"]);
  }
}
