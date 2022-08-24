import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from 'src/nav/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventService } from './events/event-details/shared/event.service';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListResolver } from './events/events-list-resolver.service';
import { EventsListComponent } from './events/events-list.component';
import { SessionListComponent } from './events/session-list.component';
import { DurationPipe } from './events/event-details/shared/duration.pipe';
import { AuthService } from './user/auth.service';
import {HttpClientModule}from '@angular/common/http';
import { EventsResolver } from './events/event-resolver.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    SessionListComponent,
    DurationPipe,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [
    EventService,
    EventRouteActivator,
    AuthService,
    EventsResolver,
    {
      provide:'canDeactivateCreateEvent',
      useValue:checkDirtyState
    
    },

EventsListResolver    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}