import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { TopNavbarComponent } from "./top-navbar/top-navbar.component";
import { LogInComponent } from "./log-in/log-in.component";

@NgModule({
  declarations: [TopNavbarComponent, LogInComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [LogInComponent]
})
export class AppModule {}
