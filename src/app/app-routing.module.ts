import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {LoginComponent} from "./form-login/login/login.component";
import {RegisterComponent} from "./form-login/register/register.component";
import {DashboardComponent} from "./home/dashboard/dashboard.component";

const routes: Routes = [
  {path: "", component: DashboardComponent, children:[
      {path: "", component: HomeComponent},
    ]},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
