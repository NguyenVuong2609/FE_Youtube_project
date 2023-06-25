import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {LoginComponent} from "./form-login/login/login.component";
import {RegisterComponent} from "./form-login/register/register.component";
import {DashboardComponent} from "./home/dashboard/dashboard.component";
import {DetailVideoComponent} from "./content/video/detail-video/detail-video.component";
import {NotFoundComponent} from "./nav-bar/not-found/not-found.component";
import {CheckLoginGuard} from "./service/CheckLoginGuard";
import {CheckAdminGuard} from "./service/CheckAdminGuard";
import {PageCategoryComponent} from "./content/category/page-category/page-category.component";
import {CreateChannelComponent} from "./content/channel/create-channel/create-channel.component";
import {CreateVideoComponent} from "./content/video/create-video/create-video.component";

const routes: Routes = [
  {path: "", component: DashboardComponent, children:[
      {path: "", component: HomeComponent},
      {path: "video/:id", component: DetailVideoComponent},
      {path: "category", component: PageCategoryComponent, canActivate:[CheckAdminGuard]},
      {path: "create-channel", component: CreateChannelComponent},
      {path: "create-video", component: CreateVideoComponent},
    ]},
  {path: "login", component: LoginComponent, canActivate:[CheckLoginGuard]},
  {path: "register", component: RegisterComponent, canActivate:[CheckLoginGuard]},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
