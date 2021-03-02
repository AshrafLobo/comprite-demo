import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  articles;

  // Filter variables
  sort: string = '';
  searchTerm: string = '';
  company: string = '';
  dateStart: string = '';

  constructor(private service: NewsService) {}

  ngOnInit(): void {
    this.service
      .getAll()
      .subscribe((articles: any[]) => (this.articles = articles));
  }
}
