import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandeVoiture } from 'src/app/core/interfaces/commandeVoiture';
import { ServiceGenService } from 'src/app/servicesCore/service-gen.service';

const url = 'http://localhost:8080/Rest/commande_voitures/';

@Component({
  selector: 'app-suiviscommandes',
  templateUrl: './suiviscommandes.component.html',
  styleUrls: ['./suiviscommandes.component.css']
})
export class SuiviscommandesComponent implements OnInit {

  listCommandeVoiture: Observable<CommandeVoiture[]>;

  constructor(private serviceCommandeVoiture: ServiceGenService<CommandeVoiture>) { }
  refresh(){
    this.listCommandeVoiture = this.serviceCommandeVoiture.getall(url)
  }
  
  ngOnInit() {
    this.refresh();
  }

  doCreer(){
      let commandeVoiture  : CommandeVoiture = {
      id: 0,
      dateCommande: new Date(),
      dateReception: new Date(),
      quantite: 0,
      dateCloture: new Date(),
      utilisateur: null,
      voiture: null,
      devis: null,
  };
    this.serviceCommandeVoiture.post(url, commandeVoiture).subscribe(
      () => this.refresh()
    );
  }

  // doDelete(){
    
  //   this.servicePiece.delete(url, 3).subscribe(
  //     () => this.refresh()
  //   );
  // }
   doModifier(commandeVoiture: CommandeVoiture){
  
    commandeVoiture.dateCloture = new Date();  
     this.serviceCommandeVoiture.put(url, commandeVoiture.id, commandeVoiture).subscribe(
       () => this.refresh()
     );
   }

   

   logout(){
    this.serviceCommandeVoiture.logout();
  }

}
