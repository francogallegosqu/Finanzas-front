import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import  { Startup } from 'src/app/core/models/startup';
@Injectable({
  providedIn: 'root'
})
export class StartupService {

  private urlBase = 'http://startupinvest.herokuapp.com/api/startup';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});
  constructor(private http: HttpClient) { }

  createStartup(startup:Startup):Observable<Object>{
    return this.http.post(this.urlBase,startup,
    {headers:this.httpHeaders})
  }

  listarStartup():Observable<any>{
<<<<<<< HEAD
    console.log("llamando a rest:"+this.urlBase+'startup/');
    return this.http.get(this.urlBase+'startup/').pipe(
=======
    console.log("llamando a rest:"+this.urlBase+'startup');
    return this.http.get(this.urlBase).pipe(
>>>>>>> eb8cb7e324ba7e04ae7bce002d8dff5dcd129b03
      map(response=>response as Startup[])
    );

  }

  getStartupById(id:number):Observable<any>{
    console.log("entrando a get Startup")
    return this.http.get(this.urlBase+'/id/'+id).pipe(
      map(response=> response as Startup)
    )
  }
}
