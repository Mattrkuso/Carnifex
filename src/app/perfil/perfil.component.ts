import { Component, OnInit } from '@angular/core';
import {PerfilService } from './perfil.service';
import { PerfilGuard } from './perfil.guard';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
