import { Component, OnInit } from '@angular/core';

import {EquipoService,Reparacion} from '../../SERVICES/equipo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reparaciones',
  templateUrl: './reparaciones.component.html',
  styleUrls: ['./reparaciones.component.css']
})
export class ReparacionesComponent implements OnInit {

  ListarReparaciones:Reparacion[]=[];

  constructor( private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
    this.listarReparaciones();
  }


  listarReparaciones(){
    this.EquipoService.getReparacion().subscribe(
      res=>{
        console.log(res);
        this.ListarReparaciones=<any>res;
      },
      err => console.log(err)
    );
}

}
