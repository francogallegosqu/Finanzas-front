import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStartupComponent } from './startup/create-startup/create-startup.component';
import { LoginComponent } from './usuarios/login/login.component';
import { RegisterComponent } from './usuarios/register/register.component';

const routes: Routes = [
  {path:'', redirectTo: '', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'create-startup',component:CreateStartupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
