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
import { DevisComponent } from './commercial/devis/components/devis.component';
import { VoituresComponent } from './commercial/voitures/components/voitures.component';
import { SuiviscommandesComponent } from './commercial/suiviscommandes/components/suiviscommandes.component';
import { ListeclientComponent } from './commercial/listeclient/component/listeclient.component';
import { ListedevisComponent } from './commercial/listedevis/component/listedevis.component';


@NgModule({
  declarations: [
    AppComponent,

    LoginsComponent,
    
    MecanicienComponent,
    StockspiecesComponent,
    FichesComponent,

    CommercialComponent,
    ClientsComponent,
    
    VoituresComponent,
    DevisComponent,
    SuiviscommandesComponent,
    ListeclientComponent,
    ListedevisComponent,
    

    
   
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
