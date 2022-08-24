
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './event-details/shared/event.service';

@Injectable()
export class EventsListResolver implements Resolve<any>{
constructor(private eventService:EventService){
    
}

    resolve() {
    return this.eventService.getEvents()    
    }
}