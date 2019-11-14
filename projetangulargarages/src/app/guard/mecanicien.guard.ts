import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilisateur } from '../core/interfaces/utilisateur';



@Injectable({
  providedIn: 'root'
})
export class MecanicienGuard implements CanActivate {
  
  constructor(private route: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      let user: Utilisateur = JSON.parse(localStorage.getItem("user"));
      if(user !== null && user.roles[0].fonction === 'MECANICIEN'){
       resolve(true);
        
      }else{
        resolve(false);
        if(user !== null){
          this.route.navigate(['/commercial']);
          
        }else{
          
          this.route.navigate(['/logins']);
        }
      }
    });
  }
  
}
