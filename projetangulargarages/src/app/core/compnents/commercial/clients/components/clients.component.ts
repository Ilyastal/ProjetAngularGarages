import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../interfaces/client';
import { Observable } from 'rxjs';
import { ServiceGenService } from 'src/app/servicesCore/service-gen.service';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

const url = 'http://localhost:8080/Rest/';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  listclients : Observable<Client[]>;
  client: Client;

  clientForm: FormGroup;
  nomValidateur= new FormControl('', Validators.required);
  prenomValidateur= new FormControl('', Validators.required);
  adresseValidateur= new FormControl('', Validators.required);
  villeValidateur= new FormControl('', Validators.required);
  codePostalValidateur= new FormControl('', Validators.required);
  telephoneValidateur= new FormControl('', Validators.required);
  quantiteValidateur= new FormControl('', Validators.required);
  sexeValidateur= new FormControl('', Validators.required);


  constructor(private serviceClient : ServiceGenService<Client>, 
              private router: Router, 
              private formBuilder: FormBuilder) { }
  refresh(){
    this.listclients = this.serviceClient.getall(url)
  }
  ngOnInit() {
  
      this.refresh();
      this.initForm();
    
  }

  onSubmit(f: NgForm){
    console.log(this.clientForm.value)
    let newClient : Client = {
      id : 0,
      
      nom: this.clientForm.value.nomValidateur,
      prenom: this.clientForm.value.prenomValidateur,
      adresse: this.clientForm.value.adresseValidateur,
      ville: this.clientForm.value.villeValidateur,
      codePostal: this.clientForm.value.codePostalValidateur,
      telephone: this.clientForm.value.telephoneValidateur,
      sexe: this.clientForm.value.sexeValidateur,
    }
    this.serviceClient.post(url +'clients/', newClient).subscribe(
      () => this.refresh()
      
    );
    this.router.navigate(['/commercial/listeclient']);
    
  }

  initForm(){
    this.clientForm = this.formBuilder.group({
      nomValidateur: this.nomValidateur,
      prenomValidateur: this.prenomValidateur,
      adresseValidateur: this.adresseValidateur,
      villeValidateur: this.villeValidateur,
      codePostalValidateur: this.codePostalValidateur,
      telephoneValidateur: this.telephoneValidateur,
      sexeValidateur: this.sexeValidateur
    })
  }



  
}
