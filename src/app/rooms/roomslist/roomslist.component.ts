import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Room } from '../room'

@Component({
  selector: 'app-roomslist',
  templateUrl: './roomslist.component.html',
  styleUrls: ['./roomslist.component.css']
})
export class RoomslistComponent implements OnChanges{

  title! : string

  @Input() roomList?: Room[]

  @Output() selectRoom = new EventEmitter<Room>() 

  selected(room: Room) {
    this.selectRoom.emit(room)
  }

  // implement adding
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

}
