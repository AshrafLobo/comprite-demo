import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {
  lat = -1.250116;
  lng = 36.820153;

  constructor() {}

  ngOnInit(): void {}
}
