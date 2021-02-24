import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles;

  constructor(private service: NewsService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((articles: any[]) => {
      this.articles = articles.slice(0, 3);
    });
  }
}
