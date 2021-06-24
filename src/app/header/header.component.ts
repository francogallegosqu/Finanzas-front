import { Component, OnInit } from '@angular/core';
import { TokenInterceptorService } from '../usuarios/token-interceptor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: TokenInterceptorService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    let username = this.authService.usuario.email;
    this.authService.logout();
    console.log('Logout', `Hola ${username}, has cerrado sesión con éxito!`, 'success');
    this.router.navigate(['/login']);
  }

}
