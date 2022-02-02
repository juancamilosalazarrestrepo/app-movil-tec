import { Component, OnInit } from '@angular/core';
import { Movil,EquipoService,Equipo,Reparacion } from 'src/app/SERVICES/equipo.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-reparaciones',
  templateUrl: './add-reparaciones.component.html',
  styleUrls: ['./add-reparaciones.component.css']
})
export class AddReparacionesComponent implements OnInit {
  movil: Movil = {
    id_movil: '',
    id_clientes: '',
    marca: '',
    modelo: ''
    
  }
  reparacion: Reparacion = {
    id_reparaciones: '',
    id_movil: '',
    descripcion: ''
    
  }
  
  equipo: Equipo = {
    id_clientes: '',
    nombre: '',
    telefono: '',
    correo: '',
    cedula: ''
  };
  
  
  

  constructor(private EquipoService: EquipoService,
             private router: Router,
             private activedRoute: ActivatedRoute
  ) { 


  }

  ngOnInit(): void {
    const id_entrada = <string>this.activedRoute.snapshot.params?.['id'];
    console.log(id_entrada);
    if (id_entrada) {
      this.EquipoService.getUnMovil(id_entrada).subscribe(
        res => {
          this.equipo = <any>res[0];
          
        },
        err => console.log(err)

      );


    }

  }

  agregarReparacion() {
    
    delete this.reparacion.id_reparaciones;
    this.EquipoService.addReparacion(this.movil.id_movil|| '', this.reparacion, this.movil).subscribe();
    this.router.navigate(['/inicio']);
  }

}


