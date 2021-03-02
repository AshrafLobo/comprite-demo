import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from './filter.pipe';

@Pipe({
  name: 'issuerfilter',
})
export class IssuerFilterPipe extends FilterPipe implements PipeTransform {
  cachedData;

  transform(
    articles: any[],
    sort?: string,
    searchTerm?: string,
    dateStart?: string
  ) {
    if (!articles) return null;

    this.cachedData = articles;

    if (sort || searchTerm || dateStart) {
      articles = this.sortArticles(articles, sort);
      articles = this.searchArticles(articles, searchTerm);
      articles = this.filterDate(articles, dateStart);
    }

    return articles;
  }
}
