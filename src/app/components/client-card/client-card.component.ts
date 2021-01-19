import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
})
export class ClientCardComponent implements OnInit {
  clients = {
    src: 'assets/issuerLogos/wppScangroup/logo_large.jpg',
    name: 'Wpp ScanGroup',
    title: 'Marketing and communications',
  };

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('Card testimonial button clicked');
  }
}
