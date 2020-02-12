import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { AuthComponent } from './auth/auth.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app.routing';

@NgModule({
  declarations: [AppComponent, TopNavbarComponent, AuthComponent, NutritionComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
