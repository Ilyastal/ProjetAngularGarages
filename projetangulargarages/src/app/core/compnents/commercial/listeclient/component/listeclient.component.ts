import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/interfaces/client';
import { Observable } from 'rxjs';
import { ServiceGenService } from 'src/app/servicesCore/service-gen.service';
import { Router } from '@angular/router';

const url = 'http://localhost:8080/Rest/clients/';

@Component({
  selector: 'app-listeclient',
  templateUrl: './listeclient.component.html',
  styleUrls: ['./listeclient.component.css']
})
export class ListeclientComponent implements OnInit {

  listClients : Observable<Client[]>;

  constructor(private serviceClient : ServiceGenService<Client>, private route:Router) { }

  refresh(){
    this.listClients = this.serviceClient.getall(url)
  }

  
  ngOnInit() {
    this.refresh();
  }
 /**
  doCreer(){
    let client : Client = {
      id : 0,
      nom: "George",
      prenom: "Paul",
      adresse: "32, rue Gambetta",
      codePostal: "69700",
      ville: "Echalas",
      telephone: "0678497812",
      sexe: null
    };
      this.serviceClient.post(url, client).subscribe(
        () => this.refresh()
      );
  }**/

    // doDelete(){
    
  //   this.serviceClient.delete(url, 3).subscribe(
  //     () => this.refresh()
  //   );
  // }
  doModifier(client: Client){
    console.log("Root")
    this.route.navigate(["/commercial/clients",client.id]);
  }

  logout(){
    this.serviceClient.logout();
  }
}
