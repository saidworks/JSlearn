import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/services/event-service.service";
import { IEvent } from "../core/models/events";
import { Subscription } from 'rxjs';

@Component({
  selector:"events-list",
  templateUrl: "./events-list.component.html"
})

export class EventsListComponent implements OnInit{
  sub?: Subscription;
  events?: IEvent[] = [];
  errorMessage: string = '';

  constructor(private EventService:EventService){
  }
  ngOnInit(): void {
    this.sub = this.EventService.getEvents().subscribe({
      next:response => {
        this.events = response ;
      },
      error: err => this.errorMessage = err
    });
  }

}
