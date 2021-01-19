import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shareholders',
  templateUrl: './shareholders.component.html',
  styleUrls: ['./shareholders.component.scss'],
})
export class ShareholdersComponent implements OnInit {
  clients = [
    {
      src: 'assets/issuerLogos/total/logo_large.jpg',
      name: 'Total Kenya',
      title: 'Oil and Petroleum Suppliers',
    },
    {
      src: 'assets/issuerLogos/wppScangroup/logo_large.jpg',
      name: 'Wpp ScanGroup',
      title: 'Marketing and communications',
    },
    {
      src: 'assets/issuerLogos/dtb/logo_large.jpg',
      name: 'Diamond Trust Bank Kenya',
      title: 'Banking group',
    },
    {
      src: 'assets/issuerLogos/dtb/logo_large.jpg',
      name: 'Diamond Trust Bank Tanzania',
      title: 'Banking group',
    },
    {
      src: 'assets/issuerLogos/hfck/logo_large.jpg',
      name: 'Housing Finance Group',
      title: 'Morgage finance provider',
    },
    {
      src: 'assets/issuerLogos/arm/logo_large.jpg',
      name: 'Athi River Mining',
      title: 'Mining and manufacturing',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
