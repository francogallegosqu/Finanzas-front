import { Component, OnInit } from '@angular/core';
import { TokenInterceptorService } from '../token-interceptor.service';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  titulo: string = 'Por favor Sign In!';
  usuario: Usuario;

  constructor(private authService:TokenInterceptorService,
    private router:Router) {
      this.usuario =new Usuario();
     }

  ngOnInit(): void {
    // if (this.authService.isAuthenticated()) {
    //   console.log('Login', `Hola ${this.authService.usuario.firstName} ya estás autenticado!`, 'info');
    //   this.router.navigate(['/register']);
    // }
  }

  login():void{
    console.log(this.usuario);
    this.authService.login(this.usuario).subscribe(response=> {
      console.log("login:"+response)
      // this.authService.guardarUsuario(response);
      // this.authService.guardarToken(response);
      // let usuario = this.authService.usuario;
      this.router.navigate(['/']);
    },
    err =>{
      if (err.status == 400){
        console.log("error de login")
      }
    });
  }

}
