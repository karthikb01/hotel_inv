import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Booking } from './booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router : ActivatedRoute, private http : HttpClient) { }

  bookingForm!: FormGroup

  ngOnInit(): void {

    const roomId = this.router.snapshot.paramMap.get('id')

    this.bookingForm = this.formBuilder.group({
      roomId: new FormControl({value : roomId, disabled : true}),
      guestEmail: new FormControl('', {validators : [Validators.email, Validators.required]}),
      guestName: new FormControl('', {validators : [Validators.required]}),

      bookingAmount: new FormControl('', {validators : [Validators.required]}),
      mobileNumber: new FormControl('', {validators : [Validators.required, Validators.pattern("^((\\+91-?) |0)?[0-9]{10}$")]}),

      checkinout: new FormGroup({
        checkinDate: new FormControl<Date | null>(null, {validators : [Validators.required]}),
        checkoutDate: new FormControl<Date | null>(null, {validators : [Validators.required]}),
      }),

      address : new FormGroup({
        line1 : new FormControl('', {validators : [Validators.required]}),
        line2 : new FormControl(''),
        city : new FormControl('', {validators : [Validators.required]}),
        state : new FormControl('', {validators : [Validators.required]}),
        country : new FormControl('', {validators : [Validators.required]}),
        zipCode : new FormControl('', {validators : [Validators.required]})
      }), 


      guests : new FormArray([]),

      tnc : new FormControl('', {validators : [Validators.requiredTrue]}),

    })

  }

  get guests() {
    return this.bookingForm.get('guests') as FormArray
  }

  addGuest(){
   this.guests.push(this.formBuilder.group({
    name : new FormControl('', {validators: [Validators.required]}),
    age : new FormControl('', {validators: [Validators.required]})
   }))
  }

  deleteGuest(index : number){
    this.guests.removeAt(index)
  }

  resetForm(){
    this.bookingForm.reset({
      roomId : this.router.snapshot.paramMap.get('id')
    })
  }

  bookRoom(){
    const booking : Booking = {
      roomId: this.bookingForm.get('roomId')?.value,
      guestEmail: this.bookingForm.get('guestEmail')?.value,
      checkinDate: this.bookingForm.get('checkinout')?.get('checkinDate')?.getRawValue(),
      checkoutDate: this.bookingForm.get('checkinout')?.get('checkoutDate')?.getRawValue(),
      bookingAmount: this.bookingForm.get('bookingAmount')?.value,
      mobileNumber: this.bookingForm.get('mobileNumber')?.value,
      guestName: this.bookingForm.get('guestName')?.value,
      guestAddress: this.bookingForm.get('address')?.get('line1')?.value + " " + this.bookingForm.get('address')?.get('line2')?.value,
      guestCity: this.bookingForm.get('address')?.get('city')?.value,
      guestState: this.bookingForm.get('address')?.get('state')?.value,
      guestCountry: this.bookingForm.get('address')?.get('country')?.value,
      guestZipCode: this.bookingForm.get('address')?.get('zipCode')?.value,
      guestCount: this.guests.length,
      guestList: this.bookingForm.get('guests')?.value,
    }

    // console.log(booking);
    
    this.http.post('./api/booking', booking).subscribe({
      next : (data) => console.log(data),
      error : (value) => console.log(value),  
      complete : () => {
        this.resetForm()
        // console.log("booked");
      }
    })
  }

}
