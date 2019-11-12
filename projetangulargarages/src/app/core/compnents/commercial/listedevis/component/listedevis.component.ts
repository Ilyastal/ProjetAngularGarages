import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Devis } from 'src/app/core/interfaces/devis';
import { ServiceGenService } from 'src/app/servicesCore/service-gen.service';

const url = 'http://localhost:8080/Rest/devis/';

@Component({
  selector: 'app-listedevis',
  templateUrl: './listedevis.component.html',
  styleUrls: ['./listedevis.component.css']
})
export class ListedevisComponent implements OnInit {

  listDevis : Observable<Devis[]>;

  constructor(private serviceDevis : ServiceGenService<Devis>) { }

  refresh(){
    this.listDevis = this.serviceDevis.getall(url)
  }

  ngOnInit() {
    
    this.refresh();
    
  }

  doCreer(){
    let devis : Devis = {
      id : 0,
      dateDevis: null,
      description: "C'est la description",
      validationDevis: true,
      utilisateur: null,
      prixHt: 12,
      tva: 1.20,
      quantite: 1,
      client: null,
      voiture: null,
      refusDevis: false,
      annulationDevis: false
    };
    this.serviceDevis.post(url, devis).subscribe(
      () => this.refresh()
    );
  }

    // doDelete(){
    
  //   this.serviceDevis.delete(url, 3).subscribe(
  //     () => this.refresh()
  //   );
  // }

  doModifier(devis: Devis){

  
  this.serviceDevis.put(url, devis.id, devis).subscribe(
      () => this.refresh()
    );
  }
}
