import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../interfaces/client';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { ServiceGenService } from 'src/app/servicesCore/service-gen.service';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
  
  sexeValidateur= new FormControl('', Validators.required);


  constructor(private serviceClient : ServiceGenService<Client>, 
              private router: Router, private route:ActivatedRoute,
              private formBuilder: FormBuilder) { 
              this.client = null;
              console.log("client");
              this.route.params.subscribe((param: {id:number}) =>
              {
                      
                        this.serviceClient.getall(url+'clients/').pipe(
                          map((data)=>data.filter((item)=>item.id == param.id ))).
                          subscribe((data)=> {
                            this.client = data[0];
                            console.log(this.client);
                            if(this.client == null) {
                              this.initForm();
                              return;
                            }
                            this.nomValidateur= new FormControl(this.client.nom, Validators.required);
                            this.prenomValidateur= new FormControl(this.client.prenom, Validators.required);
                            this.adresseValidateur= new FormControl(this.client.adresse, Validators.required);
                            this.villeValidateur= new FormControl(this.client.ville, Validators.required);
                            this.codePostalValidateur= new FormControl(this.client.codePostal, Validators.required);
                            this.telephoneValidateur= new FormControl(this.client.telephone, Validators.required);
                           
                            this.sexeValidateur= new FormControl(this.client.sexe, Validators.required);
                            this.initForm();
                          }
                        )
                }
                );
              }
 
  ngOnInit() {
  
     this.initForm();
    
  }
  

  onSubmit(){
    console.log(this.clientForm.value)
  
    if(this.client == null) {
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
      () =>  this.router.navigate(['/commercial/listeclient'])
      
    );
   
    }
    else
    {
      this.doModifier();
    }
  }

  doModifier(){
    let client : Client = {
    id:this.client.id,
    nom: this.clientForm.value.nomValidateur,
      prenom: this.clientForm.value.prenomValidateur,
      adresse: this.clientForm.value.adresseValidateur,
      ville: this.clientForm.value.villeValidateur,
      codePostal: this.clientForm.value.codePostalValidateur,
      telephone: this.clientForm.value.telephoneValidateur,
      sexe: this.clientForm.value.sexeValidateur,
    };
    this.serviceClient.put(url+'clients',client.id, client).subscribe(
      ()=> this.router.navigate(['/commercial/listeclient'])
    );
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

  logout(){
    this.serviceClient.logout();
  }


  
}
