import { Component, OnInit } from '@angular/core';
import { TimelinesService } from 'src/app/services';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  timelines;

  constructor(private service: TimelinesService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((result) => (this.timelines = result));
  }
}
