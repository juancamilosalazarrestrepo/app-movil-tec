import { Component, OnInit } from '@angular/core';
import { Equipo, EquipoService } from '../../SERVICES/equipo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

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
  ) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activedRoute.snapshot.params?.['id'];
    console.log(id_entrada)


    if (id_entrada) {
      this.EquipoService.getUnEquipo(id_entrada).subscribe(
        res => {
          this.equipo = <any>res[0];
          console.log(this.equipo);
        },
        err => console.log(err)

      );


    }

  }

  modificar() {
    this.EquipoService.editEquipo(this.equipo.id_clientes || ' ', this.equipo).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)

    );
    this.router.navigate(['/inicio']);

  }

}
