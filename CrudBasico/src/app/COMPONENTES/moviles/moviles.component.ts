import { Component, OnInit } from '@angular/core';
import {EquipoService,Movil,Reparacion} from '../../SERVICES/equipo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrls: ['./moviles.component.css']
})
export class MovilesComponent implements OnInit {
  ListarMovil:Movil[]=[];

  constructor( private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {

    this.listarMovil();
  }

  listarMovil(){
    this.EquipoService.getMovil().subscribe(
      res=>{
        console.log(res);
        this.ListarMovil=<any>res;
      },
      err => console.log(err)
    );
  }

  agregarReparacion(id:string){
    this.router.navigate(['/addReparacion/'+id]);
    }

}
