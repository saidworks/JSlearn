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
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],

  declarations: [
    EventsAppComponent,EventsListComponent,EventThumbnailComponent, NavbarComponent, EventDetailsComponent, CreateEventComponent, Error404Component
  ],

  bootstrap: [EventsAppComponent],
  providers:[
      EventRouteActivatorService,EventService,ToastrService
  ]
})
export class AppModule { }
