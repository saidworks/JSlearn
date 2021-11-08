import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";
import { Routes } from "@angular/router";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { Error404Component } from "./errors/error404/error404.component";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";
import { EventListResolver } from "./events/event-list-resolver.service";

export const appRoutes:Routes = [
    {path:'events/new',component:CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
    {path:'events',component: EventsListComponent,resolve:{events:EventListResolver}},
    {path:'events/:id',component: EventDetailsComponent, canActivate:[EventRouteActivatorService] },
    {path:'404',component:Error404Component},
    {path:'',redirectTo:'/events',pathMatch:'full'},
    {
      path:'user',
      loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule)
    },


]
