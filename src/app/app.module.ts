import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './usuarios/login/login.component';
import { RegisterComponent } from './usuarios/register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateStartupComponent } from './startup/create-startup/create-startup.component';
import { ListarStartupComponent } from './startup/listar-startup/listar-startup.component';
import { VerticalComponent } from './vertical/vertical.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleStartupComponent } from './detalle-startup/detalle-startup.component';
import { InvestmentComponent } from './investment/investment.component';
import { MisStartupComponent } from './mis-startup/mis-startup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    CreateStartupComponent,
    ListarStartupComponent,
    VerticalComponent,
    DashboardComponent,
    DetalleStartupComponent,
    InvestmentComponent,
    MisStartupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
