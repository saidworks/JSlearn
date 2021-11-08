import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { NavbarComponent} from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error404/error404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventService } from './shared/services/event-service.service';
import { EventListResolver } from './events/event-list-resolver.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],

  declarations: [
    EventsAppComponent,EventsListComponent,EventThumbnailComponent, NavbarComponent, EventDetailsComponent, CreateEventComponent, Error404Component
  ],

  bootstrap: [EventsAppComponent],
  providers:[
      EventRouteActivatorService,
      EventService,
      ToastrService,
      {provide:'canDeactivateCreateEvent',
      useValue:checkDirtyState},
      EventListResolver
  ]
})
export class AppModule { }
export function checkDirtyState(component:CreateEventComponent){
  if (component.isDirty){
    return window.confirm('You did not save this event, do you really want to continue without saving? ');
  }
  return true;
}
