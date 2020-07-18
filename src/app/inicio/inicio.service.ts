import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  [x: string]: any;

  baseURL: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
}
