import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {SignInForm} from "../../model/SignInForm";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }
  hide = true;
  form: any = {}
  signInForm?: SignInForm;
  status = 'Please fill in the form to login'

  constructor(private authService: AuthService, private tokenService: TokenService,
              private router: Router) {
  }

  login() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    )
    this.authService.signin(this.signInForm).subscribe(data => {
      console.log(data)
      // @ts-ignore
      if (data.status == 202) {
        this.status = 'Login failed! Please check your account!'
      } else {
        // @ts-ignore
        this.tokenService.setName(data.name)
        // @ts-ignore
        this.tokenService.setAvatar(data.avatar)
        // @ts-ignore
        this.tokenService.setToken(data.token)
        // @ts-ignore
        this.tokenService.setRole(data.roles)
        // Điều hướng //
        this.router.navigate(['']).then(r => {
          window.location.reload()
        })
      }
    });
  }
}
