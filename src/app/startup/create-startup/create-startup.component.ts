import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Startup } from 'src/app/models/startup';
import { StartupService } from 'src/app/servicios/startup.service';
import { TokenInterceptorService } from 'src/app/usuarios/token-interceptor.service';

@Component({
  selector: 'app-create-startup',
  templateUrl: './create-startup.component.html',
  styleUrls: ['./create-startup.component.css']
})
export class CreateStartupComponent implements OnInit {

  startup:Startup=new Startup();
  constructor(public httpStartup:StartupService,private authService:TokenInterceptorService,private router:Router) { }

  ngOnInit(): void {
    
  }

  createStarup(){
    this.startup.userId=this.authService.getTokenId()
    this.httpStartup.createStartup(this.startup).subscribe(response=>
      console.log(response))
    // console.log(this.startup)
    this.router.navigate(['/dashboard/listar-startup']);
  }

}
