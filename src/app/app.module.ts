import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsThumbnailComponent } from './events-thumbnail/events-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './event.service';
import { ToastrService } from './toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { appRoutes } from './routes';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorGuard } from './event-route-activator.guard';
import { EventsListResolverService } from './events-list-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorGuard,
    EventsListResolverService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You haven\'t saved, do you really want to cancel?');
  }
  return true;
}
