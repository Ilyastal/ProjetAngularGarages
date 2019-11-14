import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginsComponent } from './core/logins/components/logins.component';
import { AuthGuard } from './core/services/auth.guard';
import { MecanicienGuard } from './guard/mecanicien.guard';
import { CommercialGuard } from './guard/commercial.guard';


const routes: Routes = [
  
  {path: 'logins', component: LoginsComponent},
  {
    path: 'mecanicien',
    loadChildren: () => import('./core/compnents/mecanicien/mecanicien.module').then(mod => mod.MecanicienModule),
    canActivate:[MecanicienGuard]
  },
  {
    path: 'commercial',
    loadChildren: () => import('./core/compnents/commercial/commercial.module').then(mod => mod.CommercialModule),
    canActivate:[CommercialGuard]
  
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
