import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news-article-dialog',
  templateUrl: './news-article-dialog.component.html',
  styleUrls: ['./news-article-dialog.component.scss'],
})
export class NewsArticleDialogComponent implements OnInit {
  @Input('article') article;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
