import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Piece } from 'src/app/core/interfaces/piece';
import { ServiceGenService } from 'src/app/servicesCore/service-gen.service';
const url = 'http://localhost:8080/Rest/pieces/';

@Component({
  selector: 'app-stockspieces',
  templateUrl: './stockspieces.component.html',
  styleUrls: ['./stockspieces.component.css']
})
export class StockspiecesComponent implements OnInit {
  
  listPieces : Observable<Piece[]>;

  constructor(private servicePiece : ServiceGenService<Piece> ) { }
  
  refresh(){
    this.listPieces = this.servicePiece.getall(url)
  }
  
  ngOnInit() {
    this.refresh();
  }

  doCreer(){
    let piece  : Piece = {
    id : 0,
    nom: "NCreation",
    prixUnitaire: 25.5,
    quantite: 2,
    description: "toto",
    typeLot: "tata",
    pieceDefectueuse: 0
    
  };
    this.servicePiece.post(url, piece).subscribe(
      () => this.refresh()
    );
  }

  // doDelete(){
    
  //   this.servicePiece.delete(url, 3).subscribe(
  //     () => this.refresh()
  //   );
  // }
   doModifier(piece: Piece, modif: boolean){
    if (modif) {
      piece.pieceDefectueuse++;
    } else {
      if(piece.pieceDefectueuse != 0)
      piece.pieceDefectueuse--;
    }
    
     this.servicePiece.put(url, piece.id, piece).subscribe(
       () => this.refresh()
     );
   }
}