import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSelectSeatsComponent } from './booking-select-seats.component';

describe('BookingSelectSeatsComponent', () => {
  let component: BookingSelectSeatsComponent;
  let fixture: ComponentFixture<BookingSelectSeatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingSelectSeatsComponent]
    });
    fixture = TestBed.createComponent(BookingSelectSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
