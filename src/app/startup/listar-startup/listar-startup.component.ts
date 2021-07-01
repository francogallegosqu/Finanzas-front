import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Startup } from 'src/app/core/models/startup';
import { StartupService } from 'src/app/core/services/startup.service';

@Component({
  selector: 'app-listar-startup',
  templateUrl: './listar-startup.component.html',
  styleUrls: ['./listar-startup.component.css']
})
export class ListarStartupComponent implements OnInit {

  startups:Startup[]
  constructor(private startupService:StartupService) { 
    this.startups=[]
    // this.startups = [
    //   {id:0,name:'Invest',
    //    description:'Bueno',
    //    photo:'http://goodinvestment.info/wp-content/uploads/2020/11/32899395526_bf271c8fa9_b.jpg',
    //    userId:1},
    //    {id:1,name:'perro',
    //    description:'rescata perros',
    //    photo:'https://www.hola.com/imagenes/estar-bien/20190207137019/razas-de-perro-para-rescate/0-645-143/border-collie-a.jpg',
    //    userId:1
    //    },
    //    {id:2,name:'gatos',
    //    description:'recata gatos',
    //    photo:'https://soyungato.com/wp-content/uploads/2020/04/gato-callejero.jpg',
    //    userId:2
    //    }
    // ];
  }

  ngOnInit(): void {
    this.reloadData()
  }

  reloadData(){
    console.log("reload!")
    this.startupService.listarStartup()
    .subscribe(startups=>{ this.startups=startups
    })
    
  }

}
