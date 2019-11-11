import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../interfaces/client';
import { Observable } from 'rxjs';
import { ServiceGenService } from 'src/app/servicesCore/service-gen.service';

const url = 'http://localhost:3000/client';

@Component({
  selector: 'app-listeclient',
  templateUrl: './listeclient.component.html',
  styleUrls: ['./listeclient.component.css']
})
export class ListeclientComponent implements OnInit {

  listcli : Observable<Client[]>;


  constructor(private servicegen : ServiceGenService<Client>) { }
  refresh(){
    this.listcli = this.servicegen.getall(url)
  }
  ngOnInit() {
    this.refresh();
  }
}
