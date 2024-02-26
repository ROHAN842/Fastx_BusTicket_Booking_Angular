import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingNotFoundComponent } from './booking-not-found.component';

describe('BookingNotFoundComponent', () => {
  let component: BookingNotFoundComponent;
  let fixture: ComponentFixture<BookingNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingNotFoundComponent]
    });
    fixture = TestBed.createComponent(BookingNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
