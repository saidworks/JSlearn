import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/services/event-service.service";
import { IEvent } from "../core/models/events";
import { Subscription } from 'rxjs';
import { TheToastrService } from "../shared/services/toastr.service";

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector:"events-list",
  templateUrl: "./events-list.component.html"
})

export class EventsListComponent implements OnInit{
  sub?: Subscription;
  events?: IEvent[] = [];
  errorMessage: string = '';
  selectedId?: number;
  events$? : Observable<any>;

  constructor(private EventService:EventService,private toastr: TheToastrService,
              private route:ActivatedRoute){
  }
  ngOnInit(): void {
    // subscribe to event service method 
    this.sub = this.EventService.getEvents().subscribe({
      next:response => {
        this.events = response ;
      },
      error: err => this.errorMessage = err
    });
    // need to review this code more 
     this.events$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        return this.EventService.getEvents();
      })
    );
  }

  handleThumbnailClick(eventName:string){
    this.toastr.success(eventName);
  }
}
