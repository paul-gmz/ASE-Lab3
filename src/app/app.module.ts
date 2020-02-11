import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { TopNavbarComponent } from "./top-navbar/top-navbar.component";
import { LogInComponent } from "./log-in/log-in.component";

@NgModule({
  declarations: [TopNavbarComponent, LogInComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [LogInComponent]
})
export class AppModule {}
