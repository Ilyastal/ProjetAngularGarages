import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommercialComponent } from './commercial.component';
import { ClientsComponent } from './clients/components/clients.component';
import { DevisComponent } from './devis/components/devis.component';
import { SuiviscommandesComponent } from './suiviscommandes/components/suiviscommandes.component';
import { VoituresComponent } from './voitures/components/voitures.component';
import { LoginsComponent } from '../core/logins/components/logins.component';
import { ListedevisComponent } from './listedevis/component/listedevis.component';
import { ListeclientComponent } from './listeclient/component/listeclient.component';


const routes: Routes = [
  {path: 'commercial', component: CommercialComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'devis', component: DevisComponent},
  {path: 'suiviscommandes', component: SuiviscommandesComponent },
  {path: 'voitures', component: VoituresComponent },
  {path: 'logins', component: LoginsComponent},
  {path: 'listedevis', component: ListedevisComponent},
  {path: 'listeclient', component: ListeclientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule { }
