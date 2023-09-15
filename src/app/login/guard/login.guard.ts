import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export const loginGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService)
  const dialog = inject(MatDialog)
  const router = inject(Router)
  // if(!loginService.isLogin){
  //   router.navigate(['login'])
  // }

  // let isLogin! : boolean
  // loginService.isLoggedIn.subscribe((data) => {
  //   if(data){
  //     isLogin = true
  //   } else {
  //     isLogin = false 
  //     router.navigate(['login'])
  //     dialog.open(LoginDialog, {restoreFocus: false});
  //   }
  // })

  // return isLogin


  if (loginService.isLoggedIn())
    return true
   
  else{
    dialog.open(LoginDialog, {restoreFocus: false});
    return false
  }

  
};

@Component({
  selector: 'dialog-from-menu-dialog',
  templateUrl: 'loginDialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class LoginDialog { }