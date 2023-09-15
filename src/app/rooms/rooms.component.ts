import {  Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RoomsService } from './rooms.service';
import { Room } from './room';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{

  constructor(private roomService : RoomsService) {}
 

  rooms$ = this.roomService.getRooms$

  selectedRoom! : Room

  roomSelected(event : Room) {
    this.selectedRoom = event
  }  

  ngOnInit(): void {
      // this.roomService.getPhotos().subscribe((data) => {
      //   console.log(data);
      // })
  }

}
