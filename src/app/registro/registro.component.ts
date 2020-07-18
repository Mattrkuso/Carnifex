import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormControlName} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {RegistroService} from './registro.service';
import { Person } from './persona';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[RegistroService]
})
export class RegistroComponent implements OnInit {
 
  people:Person[];
  person = new Person();

  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl(''),
      edad: new FormControl(''),
      correo: new FormControl(''),
      password: new FormControl ('')
    });
  }
  registro:FormGroup;

  constructor(protected apiService: RegistroService, private router:Router  ) {
    this.registro = this.createFormGroup();
    
   }
 

  ngOnInit(): void {
  }
  
  onRegistrar(){
    window.alert('Registro Exitoso'),
    this.apiService.onRegistrar(this.registro.value)
      .subscribe(data => {
        console.log(data)
        
      }),
      this.registro.reset();
      this.router.navigate(['/login'])
  }
     
}