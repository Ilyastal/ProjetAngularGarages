import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../interfaces/client';
import { Observable } from 'rxjs';
import { ServiceGenService } from 'src/app/servicesCore/service-gen.service';

const url = 'http://localhost:8080/Rest/clients/';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  listclients : Observable<Client[]>;
client: Client;

  constructor(private servicegen : ServiceGenService<Client>) { }
  refresh(){
    this.listclients = this.servicegen.getall(url)
  }
  ngOnInit() {
    // this.client= new Client();
      this.refresh();
    
  }

  doCreer(client : Client){
    let cl  : Client = {
    
   id : 0,
     nom: "nom",
     prenom:  "prenom",
     adresse:"",
     ville:"",
     codepostal:"",
     telephone:"",
     sexe:""
  };
    this.servicegen.post(url, client).subscribe(
      () => this.refresh()
    );
  }

  doDelete(){
    
    this.servicegen.delete(url, 3).subscribe(
      () => this.refresh()
    );
  }
  doModifier(){
    let cl  : Client = {
    id : 4,
    nom: "nom",
    prenom:  "prenom",
    adresse:"",
    ville:"",
    codepostal:"",
    telephone:"",
    sexe:""
  };
    this.servicegen.put(url, cl.id, cl).subscribe(
      () => this.refresh()
    );
  }
}
