import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectServiceComponent implements OnInit {
  service;

  constructor() {}

  ngOnInit(): void {}

  onChange() {
    // console.log('Service', this.service);
  }
}
