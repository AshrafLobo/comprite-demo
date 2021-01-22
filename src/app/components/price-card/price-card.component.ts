import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss'],
})
export class PriceCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    window.open('../../assets/downloads/B261 Pay100 Plus Setup.exe');
  }
}
