import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MecanicComponent } from './mecanic.component';


const routes: Routes = [
  { path : 'mecanic' , component: MecanicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MecanicRoutingModule { }
