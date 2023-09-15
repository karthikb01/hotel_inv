import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  isLogin: boolean = false
  isAdmin: boolean = false

  private loggedIn = new BehaviorSubject<boolean>(this.isLogin);

  isLoggedIn() {
    return this.loggedIn.asObservable()
  }

  // get isLoggedIn() {
  //   return this.loggedIn.asObservable()
  // }

  login(username: string, password: string) {
    if (username == "admin" && password == "admin") {
      this.isLogin = true
      this.isAdmin = true
      this.loggedIn.next(true)
    } else if (username == "user" && password == "user") {
      this.isLogin = true
      this.loggedIn.next(true)
    }
    return this.isLogin
  }

  logout() {
    this.isLogin = false
    this.isAdmin = false
    this.loggedIn.next(false)

    this.router.navigate([''])
    // this.loggedIn.next(false)
    // this.loggedIn.closed
  }
}
