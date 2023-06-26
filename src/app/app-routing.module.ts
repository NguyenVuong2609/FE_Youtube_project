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
import {CreatePlaylistComponent} from "./content/playlist/create-playlist/create-playlist.component";
import {MychannelComponent} from "./content/channel/mychannel/mychannel.component";
import {MyplaylistComponent} from "./content/playlist/myplaylist/myplaylist.component";
import {MyHistoryComponent} from "./content/history/my-history/my-history.component";
import {SearchPageComponent} from "./home/search-page/search-page.component";

const routes: Routes = [
  {path: "", component: DashboardComponent, children:[
      {path: "", component: HomeComponent},
      {path: "video/:id", component: DetailVideoComponent},
      {path: "category", component: PageCategoryComponent, canActivate:[CheckAdminGuard]},
      {path: "create-channel", component: CreateChannelComponent},
      {path: "create-video", component: CreateVideoComponent},
      {path: "create-playlist", component: CreatePlaylistComponent},
      {path: "mychannel", component: MychannelComponent},
      {path: "myplaylist", component: MyplaylistComponent},
      {path: "myhistory", component: MyHistoryComponent},
      {path: "search/:name", component: SearchPageComponent},
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
