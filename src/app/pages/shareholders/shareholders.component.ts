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
      url_link: 'total_kenya',
      name: 'Total Kenya',
      title: 'Oil and Petroleum Suppliers',
    },
    {
      src: 'assets/issuerLogos/wppScangroup/logo_large.jpg',
      url_link: 'wpp_scangroup',
      name: 'Wpp ScanGroup',
      title: 'Marketing and communications',
    },
    {
      src: 'assets/issuerLogos/dtb/logo_large.jpg',
      url_link: 'dtb_kenya',
      name: 'Diamond Trust Bank Kenya',
      title: 'Banking group',
    },
    {
      src: 'assets/issuerLogos/dtb/logo_large.jpg',
      url_link: 'dtb_tanzania',
      name: 'Diamond Trust Bank Tanzania',
      title: 'Banking group',
    },
    {
      src: 'assets/issuerLogos/hfck/logo_large.jpg',
      url_link: 'hfck',
      name: 'Housing Finance Group',
      title: 'Morgage finance provider',
    },
    {
      src: 'assets/issuerLogos/arm/logo_large.jpg',
      url_link: 'arm',
      name: 'Athi River Mining',
      title: 'Mining and manufacturing',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
