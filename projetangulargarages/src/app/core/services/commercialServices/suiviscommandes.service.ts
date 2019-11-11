import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuiviscommandesService {

  constructor(private http: HttpClient) { }
}
