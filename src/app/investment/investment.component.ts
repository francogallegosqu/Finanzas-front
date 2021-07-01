import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investment } from '../core/models/investement';
import { InvestmentService } from '../core/services/investment.service';
import { TokenInterceptorService } from '../usuarios/token-interceptor.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {
  investment:Investment
  @Input() inicio: number;
  variable_id:number
  constructor(public httpInvestment:InvestmentService,private authService:TokenInterceptorService,private router:Router) { 
    this.investment = new Investment();
    this.inicio=0
    this.variable_id=0;
  }

  ngOnInit(): void {
    let userId=this.authService.getTokenId()
    let id_startup:any =sessionStorage.getItem(`${userId}`)
    let token = JSON.parse(id_startup);
    console.log("id de startup en invested : "+token.id)
    this.variable_id = token.id
    console.log(" consolidando id variable startup: "+this.variable_id)
  }

  createInvestment(){
    this.investment.userId=this.authService.getTokenId()
    this.investment.startupId = this.variable_id
    this.httpInvestment.createInvestment(this.investment).subscribe(response=>
      console.log(response))
      console.log(this.investment)
    // console.log(this.startup)
    this.router.navigate(['/dashboard/listar-startup']);
  }

}
