import { Component, OnInit } from '@angular/core';
import { TokenInterceptorService } from '../usuarios/token-interceptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  images:any=[]
  constructor(public authService: TokenInterceptorService, private router: Router
    ) {
    this.images = [
      {title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/700/900/500"},
      {title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500"},
      {title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500"}
    ];
    
   }

  ngOnInit(): void {
    
  }

  logout(): void {
    let username = this.authService.usuario.email;
    this.authService.logout();
    console.log('Logout', `Hola ${username}, has cerrado sesión con éxito!`, 'success');
    this.router.navigate(['/login']);
  }

}
