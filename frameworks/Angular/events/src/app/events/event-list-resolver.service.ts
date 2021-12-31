import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "../shared/services/event-service.service";
import { map } from "rxjs/operators";

@Injectable()
export class EventListResolver implements Resolve<any>{
  test:any;
  constructor(
    private eventService: EventService
  ){}
  resolve() {
      this.test = this.eventService.getEvents().pipe(map(events=>events));
      console.log(this.test);
      return this.test;
  }

}
