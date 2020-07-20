import { Component, OnInit } from '@angular/core';
import {PerfilService } from './perfil.service';
import { PerfilGuard } from './perfil.guard';
import { Router } from '@angular/router';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor( private perfiSer: PerfilService, private router: Router) { }

  ngOnInit(): void {
  }

  outlogout(){
    
  }

}
