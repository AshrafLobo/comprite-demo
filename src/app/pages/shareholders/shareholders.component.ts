import { Component, OnInit } from '@angular/core';
import { IssuersService } from 'src/app/services';

@Component({
  selector: 'app-shareholders',
  templateUrl: './shareholders.component.html',
  styleUrls: ['./shareholders.component.scss'],
})
export class ShareholdersComponent implements OnInit {
  clients;

  constructor(service: IssuersService) {
    this.clients = service.getIssuers();
  }

  ngOnInit(): void {}
}
