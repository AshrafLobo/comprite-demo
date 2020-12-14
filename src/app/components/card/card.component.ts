import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('hasButtons') hasButtons: boolean = true;
  @Input('hasBackground') hasBackground: string = 'white';

  constructor() {}

  ngOnInit(): void {}
}
