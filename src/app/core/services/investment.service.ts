import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { User, UserJson, CreateUser, Login, UserResponse } from 'src/app/core/models/user';
import { map } from 'rxjs/operators';
import { Investment } from '../models/investement';
import { Observable } from 'rxjs';
import { Installment } from '../models/installment';
@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private urlBase = 'http://startupinvest.herokuapp.com/api/';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});
  constructor(private http:HttpClient) { }

  createInvestment(investment:Investment):Observable<Object>{
    return this.http.post(this.urlBase+'investment/',investment,
    {headers:this.httpHeaders})
  }

  getInstallment(id:number):Observable<any>{
    return this.http.get(this.urlBase+'installment/user/'+id).pipe(
      map(response=> response as Installment[])
    )
  }

  
}
