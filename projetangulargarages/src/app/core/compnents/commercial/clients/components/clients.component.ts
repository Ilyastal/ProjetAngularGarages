import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../interfaces/client';
import { Observable } from 'rxjs';
import { ServiceGenService } from 'src/app/servicesCore/service-gen.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  

  constructor() { }
  refresh(){
    
  }
  ngOnInit() {
  
     
    
  }
  onSubmit(){

  }
  
  
}
