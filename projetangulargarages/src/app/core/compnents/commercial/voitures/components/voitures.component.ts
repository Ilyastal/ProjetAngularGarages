import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{Voiture} from '../../../../interfaces/voiture';
import { ServiceGenService } from 'src/app/servicesCore/service-gen.service';

const url='http://localhost:3000/voiture';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {
listevoitures : Observable<Voiture[]>;


constructor(private servicegen : ServiceGenService<Voiture>) { }
refresh(){
  this.listevoitures = this.servicegen.getall(url)
}
ngOnInit() {
  this.refresh();
}


}


