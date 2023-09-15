import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private loginService: LoginService) { }

  userName!: string
  password!: string


  login() {
    if (this.loginService.login(this.userName, this.password))
      this.router.navigate(['rooms'])
  }

}
