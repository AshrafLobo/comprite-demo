import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewsArticleDialogComponent } from '../news-article-dialog/news-article-dialog.component';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input('article') article;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openDialog() {
    const modalRef = this.modalService.open(NewsArticleDialogComponent, {
      size: 'xl',
    });

    modalRef.componentInstance.article = this.article;
  }
}
