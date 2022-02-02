import { Component, OnInit } from '@angular/core';
import {EquipoService, Equipo, Movil, Reparacion,Administrador} from '../../SERVICES/equipo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  //variable
  ListarEquipo:Equipo[]=[];
  ListarMovil:Movil[]=[];
  ListarReparaciones:Reparacion[]=[];
  ListarAdministradores:Administrador[]=[];


  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
    this.listarEquipo();
    this.listarMovil();
    this.listarReparaciones();
    this.listarAdministradores();
  
  };


listarEquipo(){
  this.EquipoService.getEquipos().subscribe(
    res=>{
      console.log(res);
      this.ListarEquipo=<any>res;
    },
    err => console.log(err)
  )
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

listarAdministradores(){
  this.EquipoService.getAdministrador().subscribe(
    res=>{
      console.log(res);
      this.ListarAdministradores=<any>res;
    },
    err => console.log(err)
  );
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

eliminar(id:string){
  this.EquipoService.deleteEquipo(id).subscribe(
    res=>{
      console.log('equipo eliminado');
      this.listarEquipo();
    },
    err=>console.log(err)
    );
}

modificar(id:string){
this.router.navigate(['/edit/'+id]);
}

agregarMovil(id:string){
  this.router.navigate(['/addMovil/'+id]);
  }

  agregarReparacion(id:string){
    this.router.navigate(['/addReparacion/'+id]);
    }

    agregarAdministrador(id:string){
      this.router.navigate(['/addAdministrador/']);
      }


}
