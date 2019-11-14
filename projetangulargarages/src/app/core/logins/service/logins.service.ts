import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../../interfaces/utilisateur';
import { Router } from '@angular/router';


const url = 'http://localhost:8080/Rest/utilisateurs/auth/';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {

  constructor(private http : HttpClient,
              private route: Router) { }
  
  auth(user: string, password: string){
    
    return new Promise(
      (resolve, reject) => (
          this.http.post(url, {user:user, password:password}).subscribe(
            (data: Utilisateur) => {
              if(data.roles[0].fonction === 'MECANICIEN' || data.roles[0].fonction === 'COMMERCIAL'){
                localStorage.setItem('user', JSON.stringify(data));
              }
              resolve(data);
            }, 
            (error) => {
              reject(error);
            } )
      )
       

    )
  }
  
 
}
