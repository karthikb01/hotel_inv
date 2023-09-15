import { Component, OnInit } from '@angular/core';
import { BookingsService } from './service/bookings.service';
import { Booking } from '../booking/booking';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {

  constructor(private bookingsService: BookingsService, private dialog: MatDialog, private router: Router) { }

  bookings!: Booking[]
  flag: boolean = false

  ngOnInit(): void {
    this.bookingsService.getBookings().subscribe((data) => {
      console.log(data.length);

      if (data.length == 0) {
        this.openDialog()
      }
      else {
        this.flag = true
        this.bookings = data
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(Dialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.router.navigate(['rooms'])
    });
  }

}

@Component({
  selector: 'dialog-from-menu-dialog',
  templateUrl: 'dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class Dialog { }