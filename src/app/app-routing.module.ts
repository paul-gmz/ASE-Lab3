import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from './log-in/log-in.component';
import {NutritionComponent} from './nutrition/nutrition.component';

const routes: Routes = [
  {path: 'auth', component: LogInComponent},
  {path: 'nutrition', component: NutritionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
