import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Startup } from 'src/app/core/models/startup';
import { StartupService } from '../core/services/startup.service';
import { TokenInterceptorService } from '../usuarios/token-interceptor.service';

@Component({
  selector: 'app-detalle-startup',
  templateUrl: './detalle-startup.component.html',
  styleUrls: ['./detalle-startup.component.css']
})
export class DetalleStartupComponent implements OnInit {

  startup:Startup;
  
  
  constructor(private httpStartup:StartupService,private activatesRoute:ActivatedRoute,
    private authService:TokenInterceptorService) { 
    this.startup=new Startup();
    
  }

  ngOnInit(): void {
    // this.httpStartup.getStartupById(this.startupId).subscribe(
    //   response => this.startup= response
    // )
    

    this.activatesRoute.params.subscribe(params=>{
      console.log(params.startupId)
      
      this.httpStartup.getStartupById(parseInt(params.startupId))
      .subscribe(response => {
        
        this.startup=response
        // this.id_startup=response.id
        let userId=this.authService.getTokenId()
        sessionStorage.setItem(`${userId}`,JSON.stringify(response));
        console.log("mandando id startup : "+this.startup); });
      
    })
  }

  
}
