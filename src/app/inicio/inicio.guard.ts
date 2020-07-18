import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { InicioService } from './inicio.service';
import { InicioComponent } from './inicio.component';




@Injectable({
  providedIn: 'root'
})
export class InicioGuard implements CanActivate {
  constructor( private iniService:InicioService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return false;
  }
  
}
