import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceGenService<T> {

  constructor(private http: HttpClient,
              private route: Router) { }

  getall(url: string): Observable<T[]>{

    return this.http.get<T[]>(url);
  }
  
  post(url: string,  data: T): Observable<T>{
    return this.http.post<T>(url , data);
  }
  // mise a jour
  put(url: string, id: number,  data: T): Observable<T>{
    return this.http.put<T>(url + '/' + id, data);
  }
  // supprimer
  delete(url: string, id: number ): Observable<T>{
    return this.http.delete<T>(url + '/' + id, );
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/logins']);
  }
}
