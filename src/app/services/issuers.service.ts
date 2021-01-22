import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IssuersService {
  issuers = [
    {
      src: 'assets/issuerLogos/total/logo_large.jpg',
      src_small: 'assets/issuerLogos/total/logo_small.png',
      url_link: 'total_kenya',
      name: 'Total Kenya',
      title: 'Oil and Petroleum Suppliers',
      description:
        'Total SE is a French multinational integrated oil and gas company founded in 1924 and one of the seven "supermajor" oil companies.',
    },
    {
      src: 'assets/issuerLogos/wppScangroup/logo_large.jpg',
      src_small: 'assets/issuerLogos/wppScangroup/logo_small.png',
      url_link: 'wpp_scangroup',
      name: 'Wpp ScanGroup',
      title: 'Marketing and communications',
      description:
        'WPP-Scangroup is a subsidiary of WPP and is listed on the Nairobi Securities Exchange. It is the largest marketing and communication group operating a multi-agency model across multiple disciplines in Sub-Saharan Africa.',
    },
    {
      src: 'assets/issuerLogos/dtb/logo_large.jpg',
      src_small: 'assets/issuerLogos/dtb/logo_small.png',
      url_link: 'dtb_kenya',
      name: 'Diamond Trust Bank Kenya',
      title: 'Banking group',
      description:
        'Diamond Trust Bank Group, in short DTB Group, is an African banking group active in Burundi, Kenya, Tanzania, and Uganda.',
    },
    {
      src: 'assets/issuerLogos/dtb/logo_large.jpg',
      src_small: 'assets/issuerLogos/dtb/logo_small.png',
      url_link: 'dtb_tanzania',
      name: 'Diamond Trust Bank Tanzania',
      title: 'Banking group',
      description:
        'Diamond Trust Bank Group, in short DTB Group, is an African banking group active in Burundi, Kenya, Tanzania, and Uganda.',
    },
    {
      src: 'assets/issuerLogos/hfck/logo_large.jpg',
      src_small: 'assets/issuerLogos/hfck/logo_small.png',
      url_link: 'hfck',
      name: 'Housing Finance Group',
      title: 'Morgage finance provider',
      description:
        'HF Group, whose official name is Housing Finance Company Limited, but is commonly referred to as Housing Finance, is a mortgage finance provider in Kenya, the largest economy in the East African Community.',
    },
    {
      src: 'assets/issuerLogos/arm/logo_large.jpg',
      src_small: 'assets/issuerLogos/arm/logo_small.png',
      url_link: 'arm',
      name: 'Athi River Mining',
      title: 'Mining and manufacturing',
      description:
        'ARM Cement Limited, formerly Athi River Mining Limited, but commonly referred to as ARM is a mining and manufacturing company in Kenya, the largest economy in the East African Community. The company is headquartered in Nairobi and its stock is listed on the Nairobi Stock Exchange.',
    },
  ];

  getIssuers() {
    return this.issuers;
  }

  getIssuer(url: string) {
    const issuer = this.issuers.filter((issuer) => issuer.url_link === url);
    return issuer[0];
  }
}
