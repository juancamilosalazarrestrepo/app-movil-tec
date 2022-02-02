import { Component, OnInit } from '@angular/core';
import {EquipoService, Equipo, Movil, Reparacion,Administrador} from '../../SERVICES/equipo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  ListarAdministradores:Administrador[]=[];

  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
    this.listarAdministradores();
  }

  listarAdministradores(){
    this.EquipoService.getAdministrador().subscribe(
      res=>{
        console.log(res);
        this.ListarAdministradores=<any>res;
      },
      err => console.log(err)
    );
  }

}
