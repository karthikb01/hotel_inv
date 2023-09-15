import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isLogin : boolean = true

  constructor(private loginService : LoginService) { }

  ngOnInit(){
    this.isLogin = this.loginService.isLogin
  }

  title = 'Hotel';
}
