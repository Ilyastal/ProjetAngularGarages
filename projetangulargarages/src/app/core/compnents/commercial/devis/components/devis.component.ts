import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Devis } from 'src/app/core/interfaces/devis';
import { Client } from 'src/app/core/interfaces/client';
import { ServiceGenService } from 'src/app/servicesCore/service-gen.service';
import { Voiture } from 'src/app/core/interfaces/voiture';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Utilisateur } from 'src/app/core/interfaces/utilisateur';

import { ListedevisComponent } from '../../listedevis/component/listedevis.component';
import { error } from 'util';
import { map} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

const url = 'http://localhost:8080/Rest/';


@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {

  devis : Devis;
  listClients : Observable<Client[]>;
  listVoitures: Observable<Voiture[]>;
  utilisateur: Utilisateur;
  saveListClients: Client[];
  saveListVoitures: Voiture[];
  
  
  devisForm: FormGroup;
  clientValidateur= new FormControl('', Validators.required);
  voitureValidateur= new FormControl('', Validators.required);
  quantiteValidateur= new FormControl('', Validators.required);
  
  descriptionValidateur= new FormControl('', Validators.required);
  

  constructor(private serviceDevis: ServiceGenService<Devis>,
              private serviceClient: ServiceGenService<Client>,
              private serviceVoiture: ServiceGenService<Voiture>,
              private router: Router,
              private route:ActivatedRoute,
              private formBuilder: FormBuilder) {
              this.devis=null;
              this.route.params.subscribe((param: {id:number}) =>
               
              
              
              {
                  this.serviceDevis.getall(url+'devis/').pipe(
                    map((data)=>data.filter((item)=>item.id == param.id ))).
                  subscribe((data)=> {
                    this.devis = data[0];
                    console.log(this.devis);
                    if(this.devis == null) {
                      this.initForm();
                      return;
                    }   
                    this.clientValidateur= new FormControl(this.devis.client.nom, Validators.required);
                    this.voitureValidateur= new FormControl(this.devis.voiture.nom, Validators.required);
                    this.quantiteValidateur= new FormControl(this.devis.quantite, Validators.required);
                    this.descriptionValidateur= new FormControl(this.devis.description, Validators.required);
                    this.initForm();             

              }
              
              )
            }
              );
          }
  
  refresh(){
   
      this.listClients = this.serviceClient.getall(url + 'clients/');
      this.listVoitures = this.serviceVoiture.getall(url + 'voitures/')
    }

  ngOnInit() {
  this.refresh();
  this.listVoitures.subscribe((voitures: Voiture[]) => {
    this.saveListVoitures = voitures;
  })
  this.listClients.subscribe((clients: Client[]) => {
    this.saveListClients = clients;
  })
  this.initForm();
  this.utilisateur = {
    id: 4,
    nom: "NledNlend",
    prenom: "estelle",
    user: "estelle",
    password: "estelle",
    desactiveUser: false,
    desactiveAngular: false,
    roles: [
        {
            id: 4,
            fonction: "COMMERCIAL"
        }
    ]
};
}
  onSubmit(f: NgForm){
    if(this.devis == null) {
    let newDevis : Devis = {
      id : 0,
      dateDevis : new Date(),
      description: this.devisForm.value.descriptionValidateur,
      validationDevis: false,
      utilisateur: this.getUtilisateur(),
      prixHt: this.getVoiture().prixUnitaire,
      tva: 1.2,
      quantite: parseInt(this.devisForm.value.quantiteValidateur),
      client: this.getClient(),
      voiture: this.getVoiture(),
      refusDevis: false,
      annulationDevis: false
    }
    this.serviceDevis.post(url +'devis/', newDevis).subscribe(
      () => this.router.navigate(['/commercial/listedevis'])
      
    );
    
    
  }

  else
  {
    this.doMod();
  }
}

  doMod(){
    let devis : Devis = {
    id:this.devis.id,
    dateDevis : new Date(),
    description: this.devisForm.value.descriptionValidateur,
    validationDevis: false,
    utilisateur: this.getUtilisateur(),
    prixHt: 1500.0,
    tva: 1.2,
    quantite: parseInt(this.devisForm.value.quantiteValidateur),
    client: this.getClient(),
    voiture: this.getVoiture(),
    refusDevis: false,
    annulationDevis: false
 
      };
      this.serviceDevis.put(url+'devis',devis.id, devis).subscribe(
        ()=> this.router.navigate(['/commercial/listedevis'])
      );
    }
  initForm(){
    this.devisForm = this.formBuilder.group({
      clientValidateur:this.clientValidateur,
      voitureValidateur: this.voitureValidateur,
      quantiteValidateur: this.quantiteValidateur,
      descriptionValidateur: this.descriptionValidateur
    })
  }

  getVoiture(): Voiture{
    return this.saveListVoitures[this.devisForm.value.voitureValidateur];
   
  }

  getClient() : Client {
    return this.saveListClients[this.devisForm.value.clientValidateur];
  }
  getUtilisateur(){
    return this.utilisateur;
  }

  logout(){
    this.serviceDevis.logout();
  }

}
