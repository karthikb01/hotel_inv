import { Component, ViewChild } from '@angular/core';
import { Room } from '../room';
import { RoomsService } from '../rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent {

  constructor(private roomsService : RoomsService) {}

  newRoom : Room = {
    roomType: '',
    amenities: '',
    price: undefined,
    photos: '',
    checkinTime: undefined,
    checkoutTime: undefined,
    rating: undefined
  }

  success : boolean = false

  addRoom(){
    this.roomsService.addRoom(this.newRoom)
    this.success = !this.success
    this.resetForm()
  }

  @ViewChild('form') form! : NgForm

  resetForm(){ 
    this.form.reset()
  }


}
