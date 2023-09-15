import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { AddroomComponent } from './addroom/addroom.component';
import { adminGuard } from '../login/guard/admin.guard';

const routes: Routes = [
  {
    path: 'add',
    component: AddroomComponent,
    canActivate: [adminGuard]
  },
  {
    path: 'book/:id',
    loadChildren: () => import('../booking/booking.module').then(m => m.BookingModule),
  },
  {
    path: '',
    component: RoomsComponent,
    // canActivateChild : [adminGuard],
    // children : [
    //   {
    //     path : 'book/:id',
    //     component : BookingComponent,
    //     // loadChildren: () => import('../booking/booking.module').then(m => m.BookingModule),
    //   }
    // ]
  },
  {
    path: 'bookings',
    loadChildren: () => import('../bookings/bookings.module').then(m => m.BookingsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
