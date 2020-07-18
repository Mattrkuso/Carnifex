import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Person} from './persona';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  [x: string]: any;

  baseURL: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  
  onRegistrar(person:Person): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.httpClient.post(this.baseURL + '/registrar', body,{'headers':headers})
  }
}