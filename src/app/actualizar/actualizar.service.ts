import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActualizarService {

  constructor(private httpClient: HttpClientModule) { }
}
