import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';
import { ModificarComponent } from './COMPONENTES/modificar/modificar.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AddMovilComponent } from './COMPONENTES/add-movil/add-movil.component';
import { AddReparacionesComponent } from './COMPONENTES/add-reparaciones/add-reparaciones.component';
import { AddAdministradorComponent } from './COMPONENTES/add-administrador/add-administrador.component';
import { UsuariosComponent } from './COMPONENTES/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarComponent,
    ModificarComponent,
    AddMovilComponent,
    AddReparacionesComponent,
    AddAdministradorComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
