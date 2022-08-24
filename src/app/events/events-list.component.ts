import{Component, OnInit}from"@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "./event-details/shared/event.service";

@Component({
selector:'events-list',
templateUrl:'./events-list.component.html'

})

export class EventsListComponent implements OnInit{
  events:any;

  constructor(private eventService:EventService,private route:ActivatedRoute){

  }
    ngOnInit() {
      this.events = this.route.snapshot.data['events']
      
    }
}
    
    