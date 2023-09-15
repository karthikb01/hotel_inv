import { CanActivateFn } from '@angular/router';
import { LoginService } from '../login.service';
import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export const adminGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService)
  const dialog = inject(MatDialog)
  if (loginService.isAdmin && loginService.isLogin)
    return loginService.isAdmin && loginService.isLogin
  else {
    dialog.open(AdminDialog, {restoreFocus: false})
    return false
  }
};

@Component({
  selector: 'admin-dialog',
  templateUrl: 'adminDialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class AdminDialog {}
