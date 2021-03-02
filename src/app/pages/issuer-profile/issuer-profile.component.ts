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
  articles;

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

        this.newsService
          .getAll(this.issuer._id)
          .subscribe((articles: any[]) => (this.articles = articles));
      });
    });
  }
}
