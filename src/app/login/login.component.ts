import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  hide = true;
  createFormGroup() {
    return new FormGroup({
      correo: new FormControl(''),
      password: new FormControl('')
    });
  }

  login: FormGroup;

  constructor( private logiService:LoginService, private router:Router) {
    this.login = this.createFormGroup();

  }

  ngOnInit(): void {
  }

  onLogin() {
    console.log('Bienvenido')
    
   
   

}


}
