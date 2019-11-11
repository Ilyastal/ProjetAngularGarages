import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommercialComponent } from './commercial.component';
import { ClientsComponent } from './clients/components/clients.component';
import { DevisComponent } from './devis/components/devis.component';
import { ListeclientComponent } from './listeclient/component/listeclient.component';
import { ListedevisComponent } from './listedevis/component/listedevis.component';
import { SuiviscommandesComponent } from './suiviscommandes/components/suiviscommandes.component';
import { VoituresComponent } from './voitures/components/voitures.component';
import { CommercialRoutingModule } from './commercial-routing.module';



@NgModule({
  declarations: [
    CommercialComponent,
    ClientsComponent,
    DevisComponent,
    ListeclientComponent,
    ListedevisComponent,
    SuiviscommandesComponent,
    VoituresComponent
  ],
  imports: [
    CommonModule, 
    CommercialRoutingModule
  ], 
  exports: [
    CommercialComponent,
    ClientsComponent,
    DevisComponent,
    ListeclientComponent,
    ListedevisComponent,
    SuiviscommandesComponent,
    VoituresComponent
  ]
})
export class CommercialModule { }
