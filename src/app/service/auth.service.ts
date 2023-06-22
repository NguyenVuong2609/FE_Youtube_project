import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {SignUpForm} from "../model/SignUpForm";
import {Observable} from "rxjs";
import {SignInForm} from "../model/SignInForm";
import {JwtResponse} from "../model/JwtResponse";
import {ChangeAvatar} from "../model/ChangeAvatar";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNUP = environment.API_LOCAL + 'signup';
  private API_SIGNIN = environment.API_LOCAL + 'signin';
  private API_UPDATE_AVATAR = environment.API_LOCAL + 'change-avatar'
  checkRegister = false;

  constructor(private httpClient: HttpClient) {
  }

  signup(signUpForm: SignUpForm): Observable<any> {
    return this.httpClient.post<any>(this.API_SIGNUP, signUpForm);
  }

  signin(signInForm: SignInForm): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(this.API_SIGNIN, signInForm);
  }

  editAvatar(changeAvatar: ChangeAvatar): Observable<any> {
    return this.httpClient.put<any>(this.API_UPDATE_AVATAR, changeAvatar)
  }

  setRegister(status: boolean) {
    this.checkRegister = status;
  }

  getRegister(): boolean {
    return this.checkRegister;
  }
}
