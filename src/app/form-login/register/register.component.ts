import {Component, OnInit} from '@angular/core';
import {SignUpForm} from "../../model/SignUpForm";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  status = '';
  form: any = {};
  hide = true;
  signUpForm = SignUpForm;
  emailFormValidate = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  test = this.builder.group({
    password: ["", [
      Validators.pattern("(?=.*[a-z,A-Z])(?=.*[0-9])(?=.+[@$]).{6,99}")
    ]]
  })

  constructor(private authService: AuthService,
              private builder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  register(): void {
    // @ts-ignore
    this.signUpForm = new SignUpForm(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    );
    // @ts-ignore
    this.authService.signup(this.signUpForm).subscribe(data => {
      if (data.message == 'no_user') {
        this.status = 'The username is existed! Please choose another username.';
      } else if (data.message == 'no_email') {
        this.status = 'The email is existed! Please choose another email.';
      } else {
        this.status = 'Create account successful!';
        this.authService.setRegister(true);
        this.router.navigate(['login']);
      }
    });
  }


  nextPage($event: PageEvent) {
    console.log('click register')
  }
}
