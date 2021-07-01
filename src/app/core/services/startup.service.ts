import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import  { Startup } from 'src/app/core/models/startup';
@Injectable({
  providedIn: 'root'
})
export class StartupService {

  private urlBase = 'http://startupinvest.herokuapp.com/api/startup/';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});
  constructor(private http: HttpClient) { }

  createStartup(startup:Startup):Observable<Object>{
    return this.http.post(this.urlBase,startup,
    {headers:this.httpHeaders})
  }

  listarStartup():Observable<any>{
<<<<<<< HEAD
    console.log("llamando a rest:"+this.urlBase+'startup');
=======
    console.log("llamando a rest:"+this.urlBase);
>>>>>>> 64723272e2063e668163e4d3f69baf4ed61637b1
    return this.http.get(this.urlBase).pipe(
      map(response=>response as Startup[])
    );

  }

  getStartupById(id:number):Observable<any>{
    console.log("entrando a get Startup")
    return this.http.get(this.urlBase+'id/'+id).pipe(
      map(response=> response as Startup)
    )
  }

  
}
