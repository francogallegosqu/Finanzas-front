import { Component, OnInit } from '@angular/core';
import { TokenInterceptorService } from '../token-interceptor.service';
import { Usuario } from '../../models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: Usuario;
  constructor(private authService:TokenInterceptorService,
  private router:Router) {
    this.usuario =new Usuario();
   }

  ngOnInit(): void {
  }
  register():void{
    // console.log(this.usuario);
    // this.authService.register(this.usuario).subscribe(response=>{
    //   console.log(response)
    //   this.router.navigate(['/login']);
    // });

    this.router.navigate(['/login']);
  }

}
