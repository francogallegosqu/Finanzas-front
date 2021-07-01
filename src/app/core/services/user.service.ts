import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { User, UserJson, CreateUser, Login, UserResponse } from 'src/app/core/models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	private path: string = "http://startupinvest.herokuapp.com/api/account";

	constructor(
		private http:HttpClient,
	){}

	// login post /login/
	login(login: Login){
		const endpoint = this.path + "/login/";
		return this.http.post<User>(endpoint, login)
			.pipe(map(data=>{
				return data;
			}))
	}

	// register post /register/
	register(createUser: CreateUser){
		const endpoint = this.path + "/register/";
		return this.http.post<String>(endpoint, createUser)
			.pipe(map(data=>{
				return data as String;
			}))
	}

	// get put del /id/{id}
	
}
