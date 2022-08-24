
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './event-details/shared/event.service';
@Injectable()
export class EventsResolver implements Resolve<any>{
constructor(private eventService:EventService){
   
}
    resolve(route:ActivatedRouteSnapshot) {
    return this.eventService.getEvent(+route.params['id']);    
    }
}