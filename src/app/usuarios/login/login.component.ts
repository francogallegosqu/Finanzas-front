import { Component, OnInit } from '@angular/core';
import { TokenInterceptorService } from '../token-interceptor.service';
import { Login, Usuario } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	titulo: string = 'Por favor Sign In!';
	usuario: Usuario;
	
	loginUser: Login = new Login('','');

	constructor(
	 	private authService:TokenInterceptorService,
		private userService:UserService,
		private router:Router) {
		this.usuario = new Usuario();
	 }

  ngOnInit(): void {
    // if (this.authService.isAuthenticated()) {
    //   console.log('Login', `Hola ${this.authService.usuario.firstName} ya estás autenticado!`, 'info');
    //   this.router.navigate(['/register']);
    // }
  }

  login():void{
	this.userService.login(this.loginUser)
		.subscribe(response => {
			console.log(response)
			//this.router.navigate(['/']);
	},
	err =>{
		if (err.status == 400){
			console.log("error de login")
		}
	});
  }

}
