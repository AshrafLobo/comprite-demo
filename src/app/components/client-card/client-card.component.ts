import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
})
export class ClientCardComponent implements OnInit {
  @Input('client') client;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('Card testimonial button clicked');
  }
}
