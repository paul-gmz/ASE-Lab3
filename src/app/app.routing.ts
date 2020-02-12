import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { NutritionComponent} from './nutrition/nutrition.component';

const routes: Routes = [
  { path: '', component: NutritionComponent },
  { path: 'auth', component: AuthComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
