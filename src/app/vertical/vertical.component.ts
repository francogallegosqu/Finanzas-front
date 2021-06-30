import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenInterceptorService } from '../usuarios/token-interceptor.service';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.css']
})
export class VerticalComponent implements OnInit {

  constructor(public authService: TokenInterceptorService, private router: Router) { }

  ngOnInit(): void {
  }

}
