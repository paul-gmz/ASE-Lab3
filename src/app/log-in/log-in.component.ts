import { Component, OnInit } from "@angular/core";
import { IUser } from "../user";
import { Router } from "@angular/router";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  name = "";
  email = "";
  password = "";
  user: IUser;
  isRegister = false;
  message = "";
  constructor(private router: Router) {}

  ngOnInit(): void {}

  displaySignIn(): void {
    this.message = "";
    this.isRegister = false;
  }

  signIn(): void {
    this.message = "";
    if (this.email === "" || this.password === "") {
      this.message = "Please fill out your email and password";
    } else {
      this.user = JSON.parse(localStorage.getItem(this.email));
      if (this.user == null) {
        this.message = "Invalid credentials";
      } else if (this.user.password !== this.password) {
        this.message = "Invalid credentials";
      } else {
        sessionStorage.setItem(
          "isAuthenticated",
          JSON.stringify({ email: this.email, isLoggedIn: true })
        );
        this.router.navigate(["/nutrition"]);
      }
    }
  }

  displayRegister(): void {
    this.message = "";
    this.isRegister = true;
  }

  register(): void {
    this.message = "";
    if (this.name === "" || this.email === "" || this.password === "") {
      this.message = "Please fill out all the above information to register";
    } else {
      this.user = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      localStorage.setItem(this.email, JSON.stringify(this.user));
      this.email = "";
      this.name = "";
      this.password = "";
      this.message = "You have successfully registered";
    }
  }
}
