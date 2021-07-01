import { Component, OnInit } from '@angular/core';
import { Installment } from '../core/models/installment';
import { InvestmentService } from '../core/services/investment.service';
import { TokenInterceptorService } from '../usuarios/token-interceptor.service';

@Component({
  selector: 'app-mis-startup',
  templateUrl: './mis-startup.component.html',
  styleUrls: ['./mis-startup.component.css']
})
export class MisStartupComponent implements OnInit {
  installment:Installment[]
 
  constructor(private installmentService:InvestmentService,
    private authService:TokenInterceptorService) { 
    this.installment=[]
    
  }

  ngOnInit(): void {
    this.reloadData()
  }

  reloadData(){
    console.log("reload! mis installment")
    let id=this.authService.getTokenId()
    this.installmentService.getInstallment(id)
    .subscribe(response=> {
      // this.installment=response
      this.installment = response
      console.log(response)
    }
    )
    
  }

}
