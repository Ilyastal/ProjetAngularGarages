import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MecanicienComponent } from './core/compnents/mecanicien/mecanicien.component';
import { MecanicienRoutingModule } from './core/compnents/mecanicien/mecanicien-routing.module';
import { LoginsComponent } from './core/logins/components/logins.component';
import { StockspiecesComponent } from './core/compnents/mecanicien/stockspieces/components/stockspieces.component';
import { FichesComponent } from './core/compnents/mecanicien/fiches/components/fiches.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientcrudComponent } from './core/clientcrud/clientcrud.component';
import { ServiceGenService } from './servicesCore/service-gen.service';



@NgModule({
  declarations: [
    AppComponent,

    LoginsComponent,

    ClientcrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
 
  ],
  providers: [ServiceGenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
