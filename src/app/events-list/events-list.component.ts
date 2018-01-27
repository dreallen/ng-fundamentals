import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ToastrService } from '../toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(private eventService: EventService,
              private toastr: ToastrService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(name: string) {
    console.log(name + ' Pressed!');
    this.toastr.success(name);
  }

}
