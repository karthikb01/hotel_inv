import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './login/guard/login.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule),
    canActivate : [loginGuard]
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    canActivate : [loginGuard]
  },
  {
    path : 'logout',
    component : LogoutComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
