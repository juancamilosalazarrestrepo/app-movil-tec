import { Component, OnInit } from '@angular/core';
import { Movil,EquipoService,Equipo } from 'src/app/SERVICES/equipo.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-movil',
  templateUrl: './add-movil.component.html',
  styleUrls: ['./add-movil.component.css']
})
export class AddMovilComponent implements OnInit {
  movil: Movil = {
    id_movil: '',
    id_clientes: '',
    marca: '',
    modelo: ''
    
  }
  
  equipo: Equipo = {
    id_clientes: '',
    nombre: '',
    telefono: '',
    correo: '',
    cedula: ''
  }

  

  constructor(private EquipoService: EquipoService,
             private router: Router,
             private activedRoute: ActivatedRoute
             ) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activedRoute.snapshot.params?.['id'];
    console.log(id_entrada);
    if (id_entrada) {
      this.EquipoService.getUnEquipo(id_entrada).subscribe(
        res => {
          
          this.equipo = <any>res[0];
          
        },
        err => console.log(err)

      );


    }

  }

  agregarMovil() {
    
    delete this.movil.id_movil;
    this.EquipoService.addMovil(this.equipo.id_clientes || ' ', this.movil, this.equipo).subscribe();
    this.router.navigate(['/inicio']);
  }

}
