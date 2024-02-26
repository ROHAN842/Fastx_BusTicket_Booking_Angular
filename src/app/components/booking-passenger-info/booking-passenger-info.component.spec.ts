import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPassengerInfoComponent } from './booking-passenger-info.component';

describe('BookingPassengerInfoComponent', () => {
  let component: BookingPassengerInfoComponent;
  let fixture: ComponentFixture<BookingPassengerInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingPassengerInfoComponent]
    });
    fixture = TestBed.createComponent(BookingPassengerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
