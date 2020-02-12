import { Component, OnInit } from "@angular/core";
import { IUser } from "../user";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  email: string = "";
  password: string = "";
  emailR: string = "";
  passwordR: string = "";
  nameR: string = "";
  user: IUser;
  isRegisterd: boolean = true;
  message: string = "";
  constructor() {}

  ngOnInit(): void {}

  logIn(): void {
    this.message = "";
    if (this.email == "" || this.password == "") {
      this.message = "Please fill out your email and password";
    } else {
      this.user = JSON.parse(localStorage.getItem(this.email));
      if (this.user == null) {
        this.message = "Invalid credentials";
      } else if (this.user.password != this.password) {
        this.message = "Invalid credentials";
      } else {
        this.message = "You are good";
      }
    }
  }

  signUp(): void {
    this.message = "";
    this.isRegisterd = false;
  }
  registerUser(): void {
    this.message = "";
    if (this.nameR == "" || this.emailR == "" || this.passwordR == "") {
      this.message = "Please fill out all the above information to registar";
    } else {
      this.user = {
        name: this.nameR,
        email: this.emailR,
        password: this.passwordR
      };
      localStorage.setItem(this.emailR, JSON.stringify(this.user));
      this.emailR = "";
      this.nameR = "";
      this.passwordR = "";
      this.message = "You have suucessfully registered";
    }
  }
  logInBack(): void {
    this.message = "";
    this.isRegisterd = true;
  }
}
