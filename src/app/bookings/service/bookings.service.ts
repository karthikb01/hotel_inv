import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from 'src/app/booking/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http : HttpClient) { }

  getBookings() {
    return this.http.get<Booking[]>('./api/booking')    
  } 
}
