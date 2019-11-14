import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Devis } from 'src/app/core/interfaces/devis';
import { Client } from 'src/app/core/interfaces/client';
import { ServiceGenService } from 'src/app/servicesCore/service-gen.service';
import { Voiture } from 'src/app/core/interfaces/voiture';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Utilisateur } from 'src/app/core/interfaces/utilisateur';
import { Router } from '@angular/router';

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
              private formBuilder: FormBuilder) { }
  
  refresh(){
    console.log(this.devisForm)
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
    console.log(this.devisForm.value)
    let newDevis : Devis = {
      id : 0,
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
    }
    this.serviceDevis.post(url +'devis/', newDevis).subscribe(
      () => this.refresh()
      
    );
    this.router.navigate(['/commercial/listedevis']);
    
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
