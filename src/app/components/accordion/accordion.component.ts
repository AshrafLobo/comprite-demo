import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input('backgroundColor') backgroundColor = '#3e4756';
  @Input('faqs') faqs;

  constructor() {}

  ngOnInit(): void {}
}
