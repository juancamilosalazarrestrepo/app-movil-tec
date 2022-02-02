import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url = '/api';

  constructor(private http: HttpClient) { }

  //get equipos

  getEquipos() {
    return this.http.get(this.url);
  }

  getMovil() {
    return this.http.get(this.url + '/movil');
  }

  getReparacion() {
    return this.http.get(this.url + '/reparacion');
  }
  getAdministrador() {
    return this.http.get(this.url + '/administrador');
  }

  // get un equipo
  getUnEquipo(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  getUnMovil(id: string) {
    return this.http.get(this.url + '/movil' + id);
  }

  getUnaReparacion(id: string) {
    return this.http.get(this.url + '/reparacion' + id);
  }

  getUnAdministrador(id: string) {
    return this.http.get(this.url + '/administrador' + id);
  }


  // agregar equipo 

  addEquipo(equipo: any) {
    return this.http.post(this.url, equipo);
  }

  addMovil(id: string, movil: Movil, equipo:Equipo) {
    return this.http.post(this.url+'/addMovil/' + id, movil);
  }
  addReparacion(id: string, reparacion: Reparacion, equipo:Equipo) {
    return this.http.post(this.url+'/addReparacion/', reparacion);
  }

  addAdministrador(id: string, administrador: Administrador, equipo:Equipo) {
    return this.http.post(this.url+'/addAdministrador/', administrador);
  }



  //eimminar

  deleteEquipo(id: string) {

    return this.http.delete(this.url + '/' + id);

  }

  //modificar equipo

  editEquipo(id: string, equipo: Equipo) {
    return this.http.put(this.url + '/' + id, equipo);
  }


}

export interface Equipo {
  id_clientes?: string;
  nombre?: string;
  telefono?: string;
  correo?: string;
  cedula?: string;
}

export interface Movil {
  id_movil?: string;
  id_clientes?: string;
  marca?: string;
  modelo?: string;
}

export interface Reparacion {
  id_reparaciones?: string;
  id_movil?: string;
  descripcion?: string;
  
}
export interface Reparacion {
  id_reparaciones?: string;
  id_movil?: string;
  descripcion?: string;
  
}

export interface Administrador {
  id_user?: string;
  username?: string;
  password_user?: string;
  correo?:string;
  
}



