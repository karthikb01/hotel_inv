import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BookingsComponent
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class BookingsModule { }
