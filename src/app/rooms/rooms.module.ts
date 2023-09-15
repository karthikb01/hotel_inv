import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { AddroomComponent } from './addroom/addroom.component'
import { FormsModule } from '@angular/forms';
import { RoomsComponent } from './rooms.component';
import { RoomslistComponent } from './roomslist/roomslist.component';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomsBookingComponent,
    AddroomComponent,
    RoomslistComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RoomsRoutingModule,
    FormsModule,
  ]
})
export class RoomsModule { }
