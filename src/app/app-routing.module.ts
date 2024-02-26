import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookingComponent } from './components/booking/booking.component';
import { BookingAvailableBusesComponent } from './components/booking-available-buses/booking-available-buses.component';
import { BookingSelectSeatsComponent } from './components/booking-select-seats/booking-select-seats.component';
import { BookingPassengerInfoComponent } from './components/booking-passenger-info/booking-passenger-info.component';
import { BookingJourneySummaryComponent } from './components/booking-journey-summary/booking-journey-summary.component';
import { BookingViewTicketComponent } from './components/booking-view-ticket/booking-view-ticket.component';
import { BookingNotFoundComponent } from './components/booking-not-found/booking-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'book', component: BookingComponent },
  { path: 'availablebuses', component: BookingAvailableBusesComponent },
  { path: 'buses/:id', component: BookingSelectSeatsComponent },
  { path: 'passengerInfo', component: BookingPassengerInfoComponent },
  { path: 'journeyDetails/:id', component: BookingJourneySummaryComponent },
  { path: 'viewticket/:id', component: BookingViewTicketComponent },
  { path: 'notfound', component: BookingNotFoundComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  //when path not match
  { path: '**', pathMatch: 'full', component: BookingNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
