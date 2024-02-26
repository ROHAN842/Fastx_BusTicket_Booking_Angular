import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookingComponent } from './components/booking/booking.component';
import { BookingAvailableBusesComponent } from './components/booking-available-buses/booking-available-buses.component';
import { BookingSelectSeatsComponent } from './components/booking-select-seats/booking-select-seats.component';
import { SeatNamePipe } from './pipes/seatname.pipe';
import { BookingPassengerInfoComponent } from './components/booking-passenger-info/booking-passenger-info.component';
import { BookingJourneySummaryComponent } from './components/booking-journey-summary/booking-journey-summary.component';
import { MyUpperPipe } from './pipes/myUpper.pipe';
import { BookingViewTicketComponent } from './components/booking-view-ticket/booking-view-ticket.component';
import { SeatBookingService } from './services/seat-booking.service';
import { TicketGenerateService } from './services/ticket-generate.service';
import { BookingNotFoundComponent } from './components/booking-not-found/booking-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BookingComponent,
    BookingAvailableBusesComponent,
    BookingSelectSeatsComponent,
    SeatNamePipe,
    BookingPassengerInfoComponent,
    BookingJourneySummaryComponent,
    MyUpperPipe,
    BookingViewTicketComponent,
    BookingNotFoundComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [SeatBookingService, TicketGenerateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
