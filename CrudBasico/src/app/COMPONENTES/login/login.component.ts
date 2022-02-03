import { Component, OnInit } from '@angular/core';
import { Usuario, EquipoService } from '../../SERVICES/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Loguear:Usuario[]=[];
  log=''
  usuario: Usuario = {
    username: '',
    password_user: ''
    
  };


  constructor(private EquipoService: EquipoService, private router: Router) {


   }

  ngOnInit(): void {
  }


  loguear() {
    



    
  this.EquipoService.getAdministrador().subscribe(
     res=>{
      console.log(res);
      this.Loguear=<any>res;
      

     },
     err => console.log(err)

  );
  
  

    
   

    
      this.router.navigate(['/inicio']);

   
    
  }

}
