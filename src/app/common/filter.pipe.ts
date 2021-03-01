import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    articles: any[],
    sort?: string,
    searchTerm?: string,
    company?: string,
    dateStart?: string,
    dateEnd?: string
  ) {
    if (!articles) return null;

    if (sort || searchTerm || company || dateStart || dateEnd) {
      articles = this.sortArticles(articles, sort);
      articles = this.searchArticles(articles, searchTerm);
      articles = this.searchCompany(articles, company);
      articles = this.filterStartDate(articles, dateStart);
      articles = this.filterEndDate(articles, dateStart);
    }

    return articles;
  }

  private sortArticles(articles, sort) {
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

  private searchArticles(articles, searchTerm) {
    return articles.filter(
      (article) => article.title.search(new RegExp(searchTerm, 'i')) >= 0
    );
  }

  private searchCompany(articles, company) {
    return articles.filter(
      (article) => article.issuer.name.search(new RegExp(company, 'i')) >= 0
    );
  }

  private filterStartDate(articles, dateStart) {
    return articles.filter((article) => {
      const start = new Date(dateStart);
      const articleDate = new Date(article.date);
      return articleDate > start ? true : false;
    });
  }

  private filterEndDate(articles, dateEnd) {
    return articles.filter((article) => {
      const start = new Date(dateEnd);
      const articleDate = new Date(article.date);
      return articleDate < start ? true : false;
    });
  }
}
