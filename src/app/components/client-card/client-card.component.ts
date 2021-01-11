import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
})
export class ClientCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('Card testimonial button clicked');
  }
}
