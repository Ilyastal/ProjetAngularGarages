import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginsComponent } from './core/logins/components/logins.component';


const routes: Routes = [
  {
    path: 'mecanicien',
    loadChildren: () => import('./core/compnents/mecanicien/mecanicien.module').then(mod => mod.MecanicienModule)
  
  },
  {path: 'logins', component: LoginsComponent},
  {
    path: 'commercial',
    loadChildren: () => import('./core/compnents/commercial/commercial.module').then(mod => mod.CommercialModule)
  
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
