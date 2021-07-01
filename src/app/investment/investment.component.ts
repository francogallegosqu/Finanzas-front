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
	investment:Investment = new Investment(0,0,'',0,'','')
	@Input() inicio: number;
	variable_id:number

	userId:number = this.authService.getTokenId();
	id_startup:any = sessionStorage.getItem(`${this.userId}`);
	token = JSON.parse(this.id_startup);

	constructor(public httpInvestment:InvestmentService,private authService:TokenInterceptorService,private router:Router) { 
		this.inicio=0;
		this.variable_id=0;
	}

	ngOnInit(): void {
		console.log("id de startup en invested : "+this.token.id)
		this.variable_id = this.token.id
		console.log("consolidando id variable startup: "+this.variable_id)
	}

	createInvestment(){
		this.investment.userId=this.authService.getTokenId()
		this.investment.startupId = this.id_startup

		

		this.httpInvestment.createInvestment(this.investment)
			.subscribe(response => {
				console.log(response);
				console.log(this.investment);
				this.router.navigate(['/dashboard/listar-startup']);
			}
		)
	}
}