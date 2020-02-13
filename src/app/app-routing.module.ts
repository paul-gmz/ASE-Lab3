import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NutritionComponent } from "./nutrition/nutrition.component";
import { LogInComponent } from "./log-in/log-in.component";

const routes: Routes = [
  { path: "nutrition", component: NutritionComponent },
  { path: "signin", component: LogInComponent },
  { path: "", redirectTo: "signin", pathMatch: "full" },
  { path: "**", redirectTo: "signin", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
