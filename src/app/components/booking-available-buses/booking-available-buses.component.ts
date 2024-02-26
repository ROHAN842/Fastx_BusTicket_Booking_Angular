import { Component, OnInit } from '@angular/core';
import { SeatBookingService } from '../../services/seat-booking.service';
import { IBus } from '../../interfaces/bus';
import { Location } from '@angular/common';
@Component({
  selector: 'app-booking-available-buses',
  templateUrl: './booking-available-buses.component.html',
  styleUrls: ['./booking-available-buses.component.css'],
})
export class BookingAvailableBusesComponent implements OnInit {
  availableBuses: IBus[] | undefined = undefined;
  keys = [
    'Bus Name',
    'Departure Time',
    'Coach Type',
    'Seats Available',
    'Fare',
  ];
  constructor(
    private seatBookingService: SeatBookingService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.availableBuses = this.seatBookingService.getFilteredBuses();
  }

  navigateBack() {
    this.location.back();
  }
}
