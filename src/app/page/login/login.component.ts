import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModules } from './login-modules';
import { AuthService } from '@core/service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ...LoginModules ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {

  loginForm: FormGroup;

  accControl(): AbstractControl<string> | null {
    return this.loginForm.get('acc');
  }

  pwdControl(): AbstractControl<string> | null {
    return this.loginForm.get('pwd');
  }

  constructor(
    private Router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.initLoginForm();
  }

  ngOnInit(): void { }

  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      acc: ['', [ Validators.required ]],
      pwd:  ['', [ Validators.required ]],
    })
  }

  login(): void {
    if(this.loginForm.valid){
      this.authService.isLoginTrigger(true);
      this.Router.navigateByUrl('pages');
    }
  }

  registerPage(e: Event): void {
    e.preventDefault();
    this.Router.navigateByUrl('register');
  }

}
