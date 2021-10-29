import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/services/event-service.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { IEvent } from 'src/app/core/models/events';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event?: any;
  sub?: Subscription;
  event$?: Observable<any>;
  constructor(private eventService:EventService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    //this.getEvent(1);
    const eventId = this.route.snapshot.paramMap.get('id');
    this.sub = this.eventService.getEvent(Number(eventId)).subscribe({
      next:response => {
        this.event = response.find(event => event.id === Number(eventId));
      }
    });
  }


}
