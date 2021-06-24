import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import  { Startup } from '../models/startup';
@Injectable({
  providedIn: 'root'
})
export class StartupService {

  private urlBase = 'http://127.0.0.1:8000/api/';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});
  constructor(private http: HttpClient) { }

  createStartup(startup:Startup):Observable<Object>{
    return this.http.post(this.urlBase+'startup/',startup,
    {headers:this.httpHeaders})
  }
}
