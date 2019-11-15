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
  etat : string[] = ['AFAIRE','ENCOUR','TERMINER','VALIDER'];
  priorite : string[] = ['TRESURGENT','URGENT', 'NORMAL', 'NONPRIORITAIRE'];
  color: string[] = ['btn-danger','btn-warning','btn-success',  'btn-info'  ]

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
      etatTache: '',
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
   doModifier(tache: Tache, action: string, operation: boolean){
    
     if(action === 'priorite'){
       let index = this.priorite.indexOf(tache.niveauPriorite);
       if(operation){
         index++;
         if(index > 3){
           index = 3;
        }
         tache.niveauPriorite = this.priorite[index];
      }else{
         index--;
         if(index < 0){
           index = 0;
         }
         tache.niveauPriorite = this.priorite[index];
       }
     }

    if(action === 'etat'){
      let indexEtat = this.etat.indexOf(tache.etatTache);
      if(operation){     
        indexEtat++;
        if(indexEtat > 2){
          indexEtat = 2;
        }
        tache.etatTache = this.etat[indexEtat];
      }else{
        indexEtat--;
        if(indexEtat < 0){
          indexEtat = 0;
        }
        tache.etatTache = this.etat[indexEtat];
      }
    }
    
     this.serviceTache.put(url, tache.id, tache).subscribe(
       () => this.refresh()
     );
   }
   getColor(type: string): string{
       return this.color[this.etat.indexOf(type)] ;
    
   }
   getColorPro(type: string): string{
    return this.color[this.priorite.indexOf(type)] ;
 
}
   
   logout(){
     console.log('mecanicien fiche');
    this.serviceTache.logout();
  }
}
