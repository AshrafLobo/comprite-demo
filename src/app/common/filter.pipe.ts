import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  cachedData;

  constructor() {}

  transform(
    articles: any[],
    sort?: string,
    searchTerm?: string,
    company?: string,
    dateStart?: string
  ) {
    if (!articles) return null;

    this.cachedData = articles;

    if (sort || searchTerm || company || dateStart) {
      articles = this.sortArticles(articles, sort);
      articles = this.searchArticles(articles, searchTerm);
      articles = this.searchCompany(articles, company);
      articles = this.filterDate(articles, dateStart);
    }

    return articles;
  }

  protected sortArticles(articles, sort) {
    if (sort === 'Desc') {
      articles.sort(function (a, b) {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA > dateB ? 1 : -1;
      });
    } else if (sort === 'Asc') {
      articles.sort(function (a, b) {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA > dateB ? -1 : 1;
      });
    }

    return articles;
  }

  protected searchArticles(articles, searchTerm) {
    return articles.filter(
      (article) => article.title.search(new RegExp(searchTerm, 'i')) >= 0
    );
  }

  protected searchCompany(articles, company) {
    return articles.filter(
      (article) => article.issuer.name.search(new RegExp(company, 'i')) >= 0
    );
  }

  protected filterDate(articles, dateStart: string) {
    const start = new Date(dateStart);

    if (dateStart)
      return (articles = this.cachedData.filter((article) => {
        const articleDate = new Date(article.date);
        return articleDate >= start;
      }));

    return articles;
  }
}
