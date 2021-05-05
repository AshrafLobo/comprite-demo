import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services';
import { IssuersService } from 'src/app/services';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  articles;
  issuers;

  // Filter variables
  sort: string = '';
  searchTerm: string = '';
  company: string = '';
  dateStart: string = '';

  constructor(
    private newsService: NewsService,
    private issuersService: IssuersService
  ) {}

  ngOnInit(): void {
    this.newsService
      .getAll()
      .subscribe((articles: any[]) => (this.articles = articles));

    this.issuersService
      .getAll()
      .subscribe((issuers: any[]) => (this.issuers = issuers));
  }
}
