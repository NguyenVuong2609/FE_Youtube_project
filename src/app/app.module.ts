import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UploadAvatarComponent} from './upload/upload-avatar/upload-avatar/upload-avatar.component';
import {UploadFileComponent} from './upload/upload-file/upload-file.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {LoginComponent} from './form-login/login/login.component';
import {RegisterComponent} from './form-login/register/register.component';
import {NavBarComponent} from './nav-bar/nav-bar/nav-bar.component';
import {FooterComponent} from './nav-bar/footer/footer.component';
import {HomeComponent} from './home/home/home.component';
import {DashboardComponent} from './home/dashboard/dashboard.component';
import {MatCardModule} from "@angular/material/card";
import {SideBarComponent} from './nav-bar/side-bar/side-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./service/auth.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.development";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { DetailVideoComponent } from './content/video/detail-video/detail-video.component';
import { NotFoundComponent } from './nav-bar/not-found/not-found.component';
import { CreateCategoryComponent } from './content/category/create-category/create-category.component';
import { PageCategoryComponent } from './content/category/page-category/page-category.component';
import { UpdateCategoryComponent } from './content/category/update-category/update-category.component';
import { CreateChannelComponent } from './content/channel/create-channel/create-channel.component';
import { CreateVideoComponent } from './content/video/create-video/create-video.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadAvatarComponent,
    UploadFileComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    SideBarComponent,
    DetailVideoComponent,
    NotFoundComponent,
    CreateCategoryComponent,
    PageCategoryComponent,
    UpdateCategoryComponent,
    CreateChannelComponent,
    CreateVideoComponent
  ],
  imports: [
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
