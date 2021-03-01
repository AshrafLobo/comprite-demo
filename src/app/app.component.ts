import { Component, OnInit } from '@angular/core';
// import { AppError } from './common/app-error';
// import { BadInputError } from './common/bad-input-error';
// import { NotFoundError } from './common/not-found-error';
import { NewsService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  articles: any;

  constructor(private service: NewsService) {}

  ngOnInit() {
    //this.service.getAll('6034f7ff459e0bfdadf2026e').subscribe((articles) => {
      //this.articles = articles;
      //console.log(articles);
    //});
  }

  // Create news article
  // createArticle(input: HTMLInputElement) {
  //   let article = {
  //     title: input.value,
  //     article_src: 'static/doc.txt',
  //     issuerId: '60224b2fd525ecf8e7972643',
  //   };

  //   input.value = '';

  //   this.service.create(article).subscribe(
  //     (article) => {
  //       this.articles.splice(0, 0, article);
  //     },
  //     (error: AppError) => {
  //       if (error instanceof BadInputError) {
  //         // this.form.setErrors(error.originalError);
  //       } else throw error;
  //     }
  //   );
  // }

  // Update news article
  // updateArticle(article) {
  //   const updateObject = {
  //     title: article.title,
  //     article_src: article.article_src,
  //     issuerId: article.issuer._id,
  //   };

  //   this.service
  //     .update(article, updateObject)
  //     .subscribe((article) => console.log(article));
  // }

  // Delete news article
  // deleteArticle(article) {
  //   let index = this.articles.indexOf(article);
  //   this.articles.splice(index, 1);

  //   this.service.delete(article._id).subscribe(
  //     () => {},
  //     (error: AppError) => {
  //       this.articles.splice(index, 0, article);
  //       if (error instanceof NotFoundError) {
  //         alert('This article has already been deleted.');
  //       } else throw error;
  //     }
  //   );
  // }
}
