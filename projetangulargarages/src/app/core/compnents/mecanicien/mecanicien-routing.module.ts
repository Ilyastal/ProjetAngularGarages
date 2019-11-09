import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { LoginsComponent } from '../../logins/components/logins.component';
import { StockspiecesComponent } from './stockspieces/components/stockspieces.component';
import { FichesComponent } from './fiches/components/fiches.component';
import { MecanicienComponent } from './mecanicien.component';

const routes: Routes = [
{path: '', component: MecanicienComponent, children:[
  {path: 'stock', component: StockspiecesComponent},
  {path: 'fiches', component: FichesComponent},
  {path: '', redirectTo:'fiches', pathMatch: 'full' },
  {path: '**', redirectTo: 'fiches'}

]}
];
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MecanicienRoutingModule { }
