import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit{

  constructor(private route : ActivatedRoute) {}
  
  roomId! : string | null

  roomId$ = this.route.params.pipe(
    map((params) => params['id']))

    
  ngOnInit(): void {
    // this.route.params.subscribe((data) => {
    //   this.roomId = data['id']
    // })

    this.route.paramMap.subscribe((params) => {
      this.roomId = params.get('id')
    })
    
  }


}
