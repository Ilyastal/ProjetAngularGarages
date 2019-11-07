import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommercialRoutingModule } from './commercial/commercial-routing.module';

import { CommercialComponent } from './commercial/commercial.component';
import { MecanicienComponent } from './mecanicien/mecanicien.component';
import { MecanicienRoutingModule } from './mecanicien/mecanicien-routing.module';
import { ClientsComponent } from './commercial/clients/components/clients.component';
import { LoginsComponent } from './core/logins/components/logins.component';
import { StockspiecesComponent } from './mecanicien/stockspieces/components/stockspieces.component';
import { FichesComponent } from './mecanicien/fiches/components/fiches.component';


@NgModule({
  declarations: [
    AppComponent,
    CommercialComponent,
    MecanicienComponent,
    ClientsComponent,
    LoginsComponent,
    StockspiecesComponent,
    FichesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommercialRoutingModule,
    MecanicienRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
