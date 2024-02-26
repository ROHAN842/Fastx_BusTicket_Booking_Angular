import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ITicket } from '../../interfaces/ticket';
import { TicketGenerateService } from '../../services/ticket-generate.service';
@Component({
  selector: 'app-booking-journey-summary',
  templateUrl: './booking-journey-summary.component.html',
  styleUrls: ['./booking-journey-summary.component.css'],
})
export class BookingJourneySummaryComponent {
  ticketId: any;
  ticket: ITicket | undefined;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketGenerateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.ticketId = params.get('id');
      this.ticket = this.ticketService.getTicketById(this.ticketId);
      if (!this.ticket) {
        this.router.navigate(['/notfound']);
      }
    });
  }
}
