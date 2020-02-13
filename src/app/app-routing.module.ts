import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NutritionComponent } from "./nutrition/nutrition.component";
import { LogInComponent } from "./log-in/log-in.component";
import { AuthenticationGuard } from "./authentication.guard";

const routes: Routes = [
  {
    path: "nutrition",
    canActivate: [AuthenticationGuard],
    component: NutritionComponent
  },
  { path: "signin", component: LogInComponent },
  { path: "", redirectTo: "signin", pathMatch: "full" },
  { path: "**", redirectTo: "signin", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
