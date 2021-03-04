import { Component, Input, OnInit } from '@angular/core';
import { DividendsService } from 'src/app/services';

@Component({
  selector: 'app-dividends',
  templateUrl: './dividends.component.html',
  styleUrls: ['./dividends.component.scss'],
})
export class DividendsComponent implements OnInit {
  dividendsData;
  today = new Date();

  @Input('issuerId') issuerId;

  constructor(private service: DividendsService) {}

  ngOnInit(): void {
    this.service.getAll(this.issuerId).subscribe((resource) => {
      this.dividendsData = resource;
      console.log('Resource', this.dividendsData);
    });
  }
}
