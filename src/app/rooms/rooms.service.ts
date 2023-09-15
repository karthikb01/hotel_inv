import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http : HttpClient) { }

  getRooms$ = this.http.get<Room[]>('./api/rooms')

  getPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }

  addRoom(room : Room){
    this.http.post('./api/rooms', room).subscribe()
  }

}
