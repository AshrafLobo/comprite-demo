import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-opt-in-button',
  templateUrl: './opt-in-button.component.html',
  styleUrls: ['./opt-in-button.component.scss'],
})
export class OptInButtonComponent implements OnInit {
  @Input('large') large: boolean;
  @Output('click') click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.click.emit();
  }
}
