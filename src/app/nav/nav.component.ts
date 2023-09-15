import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  isLogin = false

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginService.isLoggedIn().subscribe({
      next : (value) => this.isLogin = value 
    })
  }

  logout() {
    this.loginService.logout()
  }


  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}