import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-registration',
  templateUrl: './share-registration.component.html',
  styleUrls: ['./share-registration.component.scss'],
})
export class ShareRegistrationComponent implements OnInit {
  issuerSlides = [
    {
      src: 'assets/carousel/issuers/Ishare.png',
      heading: 'iShare Pro',
      description:
        'Our share registry software ISharePro is a trend setting proprietary software that was designed from the ground up, in consideration with the CDSC IT vendors and has been specifically written to integrate fully with the CDSC environment.',
    },
    {
      heading: 'Virtual AGM',
      description:
        'Having trouble holding AGMs or EGMs during the pandemic? Here at Comp-rite we are technically gifted and eager to help you keep your stakeholders informed. With the right technology and provider, a virtual or hybrid annual general meeting can be just as professional, informative and effective as hosting your usual physical event.',
    },
  ];

  shareholderSlides = [
    {
      src: 'assets/carousel/shareholders/mpesa.png',
      heading: 'Mpesa Dividend Payment',
      description:
        'Comp-rite now allows you to receive your dividend using mpesa dial *483*505# to change how you receive your dividend payment',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
