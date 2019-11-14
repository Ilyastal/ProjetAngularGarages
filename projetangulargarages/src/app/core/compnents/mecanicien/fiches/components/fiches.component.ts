import { Component, OnInit } from '@angular/core';
import { Tache } from 'src/app/core/interfaces/tache';
import { ServiceGenService } from 'src/app/servicesCore/service-gen.service';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/Rest/taches/';

@Component({
  selector: 'app-fiches',
  templateUrl: './fiches.component.html',
  styleUrls: ['./fiches.component.css']
})
export class FichesComponent implements OnInit {
  listTaches : Observable<Tache[]>;

  constructor(private serviceTache : ServiceGenService<Tache> ) { }
  
  refresh(){
    this.listTaches = this.serviceTache.getall(url)
  }
  
  ngOnInit() {
    this.refresh();
  }

  doCreer(){
    let tache  : Tache = {
      id: 0,
      dateFinTache: null,
      description: "blabla",
      utilisateur: null,
      niveauPriorite: null,
      etatTache: false,
      fiche: null,
      cloture: false,
      dateCreation: null,
    
  };
    this.serviceTache.post(url, tache).subscribe(
      () => this.refresh()
    );
  }

  // doDelete(){
    
  //   this.servicePiece.delete(url, 3).subscribe(
  //     () => this.refresh()
  //   );
  // }
   doModifier(tache: Tache){
    
     this.serviceTache.put(url, tache.id, tache).subscribe(
       () => this.refresh()
     );
   }
   
   logout(){
     console.log('mecanicien fiche');
    this.serviceTache.logout();
  }
}
