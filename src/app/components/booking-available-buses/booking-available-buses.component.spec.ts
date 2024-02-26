import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAvailableBusesComponent } from './booking-available-buses.component';

describe('BookingAvailableBusesComponent', () => {
  let component: BookingAvailableBusesComponent;
  let fixture: ComponentFixture<BookingAvailableBusesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingAvailableBusesComponent]
    });
    fixture = TestBed.createComponent(BookingAvailableBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
