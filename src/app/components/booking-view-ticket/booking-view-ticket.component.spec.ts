import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingViewTicketComponent } from './booking-view-ticket.component';

describe('BookingViewTicketComponent', () => {
  let component: BookingViewTicketComponent;
  let fixture: ComponentFixture<BookingViewTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingViewTicketComponent]
    });
    fixture = TestBed.createComponent(BookingViewTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
