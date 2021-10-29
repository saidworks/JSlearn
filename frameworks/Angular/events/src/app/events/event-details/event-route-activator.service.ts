import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot, Router } from '@angular/router';
import {EventService} from '../../shared/services/event-service.service';
import { EventDetailsComponent } from './event-details.component';

@Injectable(
  //{providedIn: 'root'}
)
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService:EventService, private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot):any{
    const eventExists = !!this.eventService.getEvent(route.params['id']);
    if(!eventExists){
      this.router.navigate(['/404']);
      console.log('it does not exists')

    }
    console.log('it exists')
    return eventExists;
  }
  
}
