import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { TopNavbarComponent } from "./top-navbar/top-navbar.component";

@NgModule({
  declarations: [TopNavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [TopNavbarComponent]
})
export class AppModule {}
