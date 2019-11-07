import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { LoginsComponent } from '../core/logins/components/logins.component';
import { StockspiecesComponent } from './stockspieces/components/stockspieces.component';
import { FichesComponent } from './fiches/components/fiches.component';
import { MecanicienComponent } from './mecanicien.component';

const routes: Routes = [
{path: 'mecanicien', component: MecanicienComponent},
{path: 'logins', component: LoginsComponent},
{path: 'stock', component: StockspiecesComponent},
{path: 'fiches', component: FichesComponent},

];


@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class MecanicienRoutingModule { }
