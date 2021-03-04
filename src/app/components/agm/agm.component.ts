import { Component, Input, OnInit } from '@angular/core';
import { AgmsService } from 'src/app/services';

@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss'],
})
export class AgmComponent implements OnInit {
  agmData;
  today = new Date();

  @Input('issuerId') issuerId;

  constructor(private service: AgmsService) {}

  ngOnInit(): void {
    this.service
      .getAll(this.issuerId)
      .subscribe((resource) => (this.agmData = resource));
  }
}
