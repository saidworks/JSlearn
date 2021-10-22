import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { NavbarComponent} from './nav/navbar.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],

  declarations: [
    EventsAppComponent,EventsListComponent,EventThumbnailComponent, NavbarComponent
  ],

  bootstrap: [EventsAppComponent],
  providers:[

  ]
})
export class AppModule { }
