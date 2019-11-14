import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilisateur } from '../interfaces/utilisateur';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private route: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      let user: Utilisateur = JSON.parse(localStorage.getItem("user"));
      if(user !== null){
        switch (user.roles[0].fonction) {
          case 'MECANICIEN':
            resolve(true);
            break;
          
          case 'COMMERCIAL':
            resolve(true);
            break;
        
          default:
              resolve(false);
            break;
        }
      }else{
        resolve(false);
        this.route.navigate(['/logins']);
      }
    });
  }
  
}
