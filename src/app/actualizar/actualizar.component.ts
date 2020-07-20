import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormControlName} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ActualizarService } from '../actualizar/actualizar.service';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  
  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl(''),
      edad: new FormControl(''),
      correo: new FormControl(''),
      password: new FormControl ('')
    });
  }

  update:FormGroup;
  constructor(private router:Router, private updateSer:ActualizarService ) { }

  ngOnInit() {
  }
  onUpdate(){
    window.alert('Datos Actualizados')

  }

}
