import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-top-navbar",
  templateUrl: "./top-navbar.component.html",
  styleUrls: ["./top-navbar.component.css"]
})
export class TopNavbarComponent implements OnInit {
  title: string = "Nutrition Facts";
  isAuthenticated: boolean = false;

  constructor() {}

  ngOnInit() {}

  onActivate(component) {
    let authenticatedUser = JSON.parse(
      sessionStorage.getItem("isAuthenticated")
    );

    if (authenticatedUser !== null && authenticatedUser.isLoggedIn) {
      this.isAuthenticated = true;
    }
  }
}
