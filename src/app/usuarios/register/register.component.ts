import { Component, OnInit } from '@angular/core';
import { TokenInterceptorService } from '../token-interceptor.service';
import { Usuario } from 'src/app/core/models/user';
import { Router } from '@angular/router';
import { CreateUser } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	usuario!: Usuario;
	createUser: CreateUser = new CreateUser(
		"","","","","","","","",""
	);

	constructor(
		private authService:TokenInterceptorService,
		private userService: UserService,
		private router:Router
	) { }

	ngOnInit(): void {
	}
	register():void{
		this.userService.register(this.createUser)
			.subscribe(resp=>{
				console.log("Creado correctamente.");
				console.log(resp);
		})
	  // console.log(this.usuario);
	  // this.authService.register(this.usuario).subscribe(response=>{
	  //   console.log(response)
	  //   this.router.navigate(['/login']);
	  // });

	  this.router.navigate(['/login']);
	}

}
