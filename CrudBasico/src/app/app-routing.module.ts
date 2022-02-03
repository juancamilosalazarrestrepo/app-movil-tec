import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdministradorComponent } from './COMPONENTES/add-administrador/add-administrador.component';
import { AddMovilComponent } from './COMPONENTES/add-movil/add-movil.component';
import { AddReparacionesComponent } from './COMPONENTES/add-reparaciones/add-reparaciones.component';

import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { LoginComponent } from './COMPONENTES/login/login.component';
import { ModificarComponent } from './COMPONENTES/modificar/modificar.component';
import { MovilesComponent } from './COMPONENTES/moviles/moviles.component';
import { ReparacionesComponent } from './COMPONENTES/reparaciones/reparaciones.component';
import { UsuariosComponent } from './COMPONENTES/usuarios/usuarios.component';


const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'add', component:AgregarComponent},
  {path:'edit/:id',component:ModificarComponent},
  {path:'addMovil/:id',component:AddMovilComponent},
  {path:'addReparacion/:id',component:AddReparacionesComponent},
  {path:'addAdministrador',component:AddAdministradorComponent},
  {path:'administradores',component:UsuariosComponent},
  {path:'login',component:LoginComponent},
  {path:'reparaciones',component:ReparacionesComponent},
  {path:'moviles',component:MovilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
