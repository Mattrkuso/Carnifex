import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import {InicioComponent} from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ActualizarComponent } from './actualizar/actualizar.component';


//Guard
import { InicioGuard } from './inicio/inicio.guard';
import {PerfilGuard } from './perfil/perfil.guard';
import { ActualizarGuard } from './actualizar/actualizar.guard';



const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'login', component:LoginComponent},
  {path:'inicio', component:InicioComponent, canActivate:[InicioGuard]},
  {path:'perfil', component:PerfilComponent, canActivate:[PerfilGuard]},
  {path:'actualizar', component:ActualizarComponent, canActivate:[ActualizarGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
