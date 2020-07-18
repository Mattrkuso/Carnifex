import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormControlName } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor( private router:Router) {
    this.login = this.createFormGroup();

  }

  ngOnInit(): void {
  }

  onLogin() {
    console.log('Ingreso');
    let correo = this.login.get('Email').value;
    let password = this.login.get('Password').value;

    if (correo === 'your value' && password === 'your value') {
      this.router.navigate(['/inicio']);
    }

  }
}
