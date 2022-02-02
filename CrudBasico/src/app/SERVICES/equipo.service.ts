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

  // get un equipo
  getUnEquipo(id: string) {
    return this.http.get(this.url + '/' + id);
  }


  // agregar equipo 

  addEquipo(equipo: any) {
    return this.http.post(this.url, equipo);
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
