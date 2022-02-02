import { Component, OnInit } from '@angular/core';
import { Movil,EquipoService,Equipo,Administrador } from 'src/app/SERVICES/equipo.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-administrador',
  templateUrl: './add-administrador.component.html',
  styleUrls: ['./add-administrador.component.css']
})
export class AddAdministradorComponent implements OnInit {
  administrador: Administrador = {
    id_user: '',
    username: '',
    password_user: '',
    correo: ''
    
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
    private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  agregarAdministrador() {
    
    delete this.administrador.id_user;
    this.EquipoService.addAdministrador(this.equipo.id_clientes || ' ', this.administrador, this.equipo).subscribe();
    this.router.navigate(['/administradores']);
  }

}
