import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { NavbarComponent} from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
  ],

  declarations: [
    EventsAppComponent,EventsListComponent,EventThumbnailComponent, NavbarComponent
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }
