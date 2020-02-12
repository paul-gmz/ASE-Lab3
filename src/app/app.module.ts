import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { LogInComponent } from './log-in/log-in.component';
import { NutritionComponent } from './nutrition/nutrition.component';

import { StorageServiceModule } from 'angular-webstorage-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TopNavbarComponent, LogInComponent, NutritionComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, StorageServiceModule, HttpClientModule],
  providers: [],
  bootstrap: [LogInComponent]
})
export class AppModule {}
