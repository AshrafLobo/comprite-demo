import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input('large') large: boolean;
  @Input('type') type: String = 'button';
  @Input('disabled') disabled: boolean = false;

  constructor() {}
}
