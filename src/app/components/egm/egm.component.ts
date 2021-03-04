import { Component, Input, OnInit } from '@angular/core';
import { EgmsService } from 'src/app/services';

@Component({
  selector: 'app-egm',
  templateUrl: './egm.component.html',
  styleUrls: ['./egm.component.scss'],
})
export class EgmComponent implements OnInit {
  egmData;
  today = new Date();
  
  @Input('issuerId') issuerId;

  constructor(private service: EgmsService) {}

  ngOnInit(): void {
    this.service.getAll(this.issuerId).subscribe((resource) => {
      this.egmData = resource;
      console.log('Egm Data', this.egmData);
    });
  }
}
