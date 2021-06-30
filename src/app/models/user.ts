export interface UserResponse {
	user: User;
}

export interface UserJson {
	id: number,
	email: string,
	fullName: string,
	age: number,
	balance: number,
	ruc: string,
	dni: string,
	premium: boolean,
	photo: string,
	cellphone: string,
}

export class User {
	static userFromJson(us: UserJson) {
		us['id'],
		us['email'],
		us['fullName'],
		us['age'],
		us['balance'],
		us['ruc'],
		us['dni'],
		us['premium'],
		us['photo'],
		us['cellphone']
	}

	constructor(
		public id: number,
		public email: string,
		public fullName: string,
		public age: number,
		public balance: number,
		public ruc: string,
		public dni: string,
		public premium: boolean,
		public photo: string,
		public cellphone: string,
	){}
}

export class CreateUser {
	constructor(
		public email: string,
		public password: string,
		public firstName: string,
		public lastName: string,
		public birthdate: string,
		public ruc: string,
		public dni: string,
		public photo: string,
		public cellphone: string,
	) { }
}

export class Login {
	constructor(
		public email: string,
		public password: string,
	) {}
}

export class Usuario {
   email:string;
   password:string;
   firstName:string;
   lastName:string;
   constructor(){
      this.email='';
      this.password='';
      this.firstName='';
      this.lastName='';
   }
  }
  