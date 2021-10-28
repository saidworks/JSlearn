import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {EventService} from '../../shared/services/event-service.service';

@Injectable(
  //{providedIn: 'root'}
)
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService:EventService) { }
  canActivate(){

  }
}
