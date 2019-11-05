import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommercialComponent } from './commercial.component';


const routes: Routes = [
  {path: 'commercial', component: CommercialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule { }
