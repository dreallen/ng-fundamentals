import { Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorGuard } from './event-route-activator.guard';
import { EventsListResolverService } from './events-list-resolver.service';

export const appRoutes: Routes = [
  {path : 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path : 'events', component: EventsListComponent, resolve: {events: EventsListResolverService} },
  {path : 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorGuard]},
  {path : '404', component: Error404Component},
  {path : '', redirectTo: 'events', pathMatch: 'full'}
];
