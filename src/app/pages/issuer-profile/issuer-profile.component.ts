import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssuersService, NewsService } from 'src/app/services';

@Component({
  selector: 'app-issuer-profile',
  templateUrl: './issuer-profile.component.html',
  styleUrls: ['./issuer-profile.component.scss'],
})
export class IssuerProfileComponent implements OnInit {
  opened = false;
  issuer;
  issuers;
  articles;
  opt_in;
  opt_in_arr = ['housing finance group', 'total kenya', 'wpp scangroup'];

  // Filter variables
  sort: string = '';
  searchTerm: string = '';
  dateStart: string = '';

  constructor(
    private route: ActivatedRoute,
    private issuersService: IssuersService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let issuer_id = params.get('issuer_id');
      this.issuersService.get(issuer_id).subscribe((issuer: {}) => {
        this.issuer = issuer;
        this.issuersService
          .getAll()
          .subscribe((issuers) => (this.issuers = issuers));

        this.opt_in =
          this.opt_in_arr.indexOf(this.issuer.name.toLowerCase()) >= 0;

        this.newsService
          .getAll(this.issuer._id)
          .subscribe((articles: any[]) => (this.articles = articles));
      });
    });
  }

  onOptInClick(name) {
    switch (name) {
      case 'housing finance group':
        window.open(
          'https://ashraflobo.github.io/comprite-demo/assets/downloads/hfck.pdf'
        );
        break;
      case 'total kenya':
        window.open(
          'https://ashraflobo.github.io/comprite-demo/assets/downloads/total.pdf'
        );
        break;
      case 'wpp scangroup':
        window.open(
          'https://ashraflobo.github.io/comprite-demo/assets/downloads/wppScangroup.pdf'
        );
        break;
      default:
        break;
    }
  }
}
