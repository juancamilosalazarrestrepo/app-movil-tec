import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdministradorComponent } from './COMPONENTES/add-administrador/add-administrador.component';
import { AddMovilComponent } from './COMPONENTES/add-movil/add-movil.component';
import { AddReparacionesComponent } from './COMPONENTES/add-reparaciones/add-reparaciones.component';

import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { ModificarComponent } from './COMPONENTES/modificar/modificar.component';
import { UsuariosComponent } from './COMPONENTES/usuarios/usuarios.component';


const routes: Routes = [
  { path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'add', component:AgregarComponent},
  {path:'edit/:id',component:ModificarComponent},
  {path:'addMovil/:id',component:AddMovilComponent},
  {path:'addReparacion/:id',component:AddReparacionesComponent},
  {path:'addAdministrador',component:AddAdministradorComponent},
  {path:'administradores',component:UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
