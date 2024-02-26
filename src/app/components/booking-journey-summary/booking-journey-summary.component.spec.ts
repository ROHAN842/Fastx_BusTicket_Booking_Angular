import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingJourneySummaryComponent } from './booking-journey-summary.component';

describe('BookingJourneySummaryComponent', () => {
  let component: BookingJourneySummaryComponent;
  let fixture: ComponentFixture<BookingJourneySummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingJourneySummaryComponent]
    });
    fixture = TestBed.createComponent(BookingJourneySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
