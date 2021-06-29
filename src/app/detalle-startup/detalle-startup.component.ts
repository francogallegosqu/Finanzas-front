import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Startup } from '../models/startup';
import { StartupService } from '../servicios/startup.service';

@Component({
  selector: 'app-detalle-startup',
  templateUrl: './detalle-startup.component.html',
  styleUrls: ['./detalle-startup.component.css']
})
export class DetalleStartupComponent implements OnInit {

  startup:Startup;
  
  constructor(private httpStartup:StartupService,private activatesRoute:ActivatedRoute) { 
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
        console.log(this.startup); });
      
    })
  }

}
