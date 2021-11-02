import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot, Router } from '@angular/router';
import {EventService} from '../../shared/services/event-service.service';
import { EventDetailsComponent } from './event-details.component';
import { Subscription } from 'rxjs';
@Injectable(
  //{providedIn: 'root'}
)
export class EventRouteActivatorService implements CanActivate {
  sub?: Subscription;
  constructor(private eventService:EventService, private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot):any{
    this.sub = this.eventService.getEvent(Number(route.params['id'])).subscribe({
      next:response => {
         const eventExists = !!response.find(event => event.id === Number(route.params['id']));
         if(!eventExists){
          this.router.navigate(['/404']);
        }
      }
    });
    return true;

    //const eventExists = !!this.eventService.getEvent(route.params['id']);
    }

}
