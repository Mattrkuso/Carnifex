import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario} from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  onLogin(): Observable<Usuario[]> {
    console.log('getPeople '+this.baseURL + 'people')
    return this.httpClient.get<Usuario[]>(this.baseURL + '/login')
  }
}
