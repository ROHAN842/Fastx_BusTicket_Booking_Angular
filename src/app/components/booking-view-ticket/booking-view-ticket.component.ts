import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ITicket } from '../../interfaces/ticket';
import { TicketGenerateService } from '../../services/ticket-generate.service';
@Component({
  selector: 'app-booking-view-ticket',
  templateUrl: './booking-view-ticket.component.html',
  styleUrls: ['./booking-view-ticket.component.css'],
})
export class BookingViewTicketComponent implements OnInit {
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
      // console.log(this.ticket)
      if (!this.ticket) this.router.navigate(['notfound']);
    });
  }
}
