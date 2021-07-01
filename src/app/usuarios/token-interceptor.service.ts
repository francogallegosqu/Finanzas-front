import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../core/models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  private _usuario:Usuario;
  private _token:any;
  constructor(private http:HttpClient) {
    this._usuario=new Usuario();
    // this._token='';
    
   }

   public get usuario(): Usuario {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
      let sessioStr:any=sessionStorage.getItem('usuario');
      this._usuario = JSON.parse(sessioStr) as Usuario ;
      return this._usuario;
    }
    return new Usuario();
  }

  public get token(): any {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }
 

  login(usuario: Usuario): Observable<any> { //retorna un usuario
    const urlEndpoint = 'http://127.0.0.1:8000/api/account/login/';
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    
    
    
    return this.http.post<any>(urlEndpoint, usuario,httpOptions).pipe(
      map(user =>{
        
          sessionStorage.setItem('token',JSON.stringify(user));
        
      })
    );
  }

  // guardarUsuario(accessToken: string): void {
  //   let payload = this.obtenerDatosToken(accessToken);
  //   this._usuario = new Usuario();
  //   this._usuario.email = payload;
  //   // this._usuario.password = payload.apellido;
  //   // this._usuario.firstName = payload.email;
  //   // this._usuario.lastName = payload.user_name;
  //   // this._usuario.roles = payload.authorities;
  //   console.log("contiene-> "+this._usuario.email)
  //   sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  // }

  // guardarToken(accessToken: string): void {
  //   this._token = accessToken;
  //   sessionStorage.setItem('token', accessToken);
  // }

  // obtenerDatosToken(accessToken: string): any {
  //   if (accessToken != null) {
  //     return accessToken;
      
  //   }
  //   return null;
  // }
  // isAuthenticated(): boolean {
  //   let payload = this.obtenerDatosToken(this.token);
  //   if (payload != null && payload.user_name && payload.user_name.length > 0) {
  //     return true;
  //   }
  //   return false;
  // }

  isAuthenticated():boolean{
    if (sessionStorage.getItem('token') != null){
      return true;
    }
    return false;
  }
  // hasRole(role: string): boolean {
  //   if (this.usuario.roles.includes(role)) {
  //     return true;
  //   }
  //   return false;
  // }

  getToken():any{
    let sessioStr:any =sessionStorage.getItem('token')
    this._token = JSON.parse(sessioStr);
    return this._token.username;

  }
  getTokenId():any{
    let sessioStr:any =sessionStorage.getItem('token')
    this._token = JSON.parse(sessioStr);
    return this._token.user_id;

  }

  register(usuario:Usuario):Observable<any>{
    
    const urlEndpoint = 'http://127.0.0.1:8000/api/account/register/';

    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    
    
    return this.http.post<any>(urlEndpoint,usuario,httpOptions);
  }

  logout(): void {
    this._token = null;
    this._usuario = new Usuario();
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
  }

  
}
