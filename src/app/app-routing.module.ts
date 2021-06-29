import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleStartupComponent } from './detalle-startup/detalle-startup.component';
import { CreateStartupComponent } from './startup/create-startup/create-startup.component';
import { ListarStartupComponent } from './startup/listar-startup/listar-startup.component';
import { LoginComponent } from './usuarios/login/login.component';
import { RegisterComponent } from './usuarios/register/register.component';

const routes: Routes = [
  {path:'', redirectTo: '/dashboard/listar-startup', pathMatch:'full'},
  {path:'login',component:LoginComponent,
  children:[
    {path:'login',component:LoginComponent},
    
  ]},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'', redirectTo: 'listar-startup', pathMatch:'full'},
    {path:'create-startup',component:CreateStartupComponent},
    {path:'listar-startup',component:ListarStartupComponent},
    {path:'startup/:startupId',component:DetalleStartupComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
