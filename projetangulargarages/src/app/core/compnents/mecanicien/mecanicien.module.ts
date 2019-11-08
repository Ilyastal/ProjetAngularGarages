import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MecanicienRoutingModule } from './mecanicien-routing.module';
import { MecanicienComponent } from './mecanicien.component';
import { StockspiecesComponent } from './stockspieces/components/stockspieces.component';
import { FichesComponent } from './fiches/components/fiches.component';



@NgModule({
  declarations: [
    MecanicienComponent,
    StockspiecesComponent,
    FichesComponent

  ],
  imports: [
    CommonModule,
    MecanicienRoutingModule
  ],
  exports: [
    MecanicienComponent,
    StockspiecesComponent,
    FichesComponent
  ]
})
export class MecanicienModule { }

