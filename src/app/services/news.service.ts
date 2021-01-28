import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  newsData = [
    {
      company: 'Comp-rite Kenya Limited',
      news: [
        {
          title: 'Title 1',
          date: '2020-12-22',
          src: 'assets/news/doc.txt',
        },
        {
          title: 'Title 2',
          date: '2020-11-08',
          src: 'assets/news/doc1.txt',
        },
      ],
    },

    {
      company: 'Wpp Scangroup',
      news: [
        {
          title: 'Title 3',
          date: '2020-08-15',
          src: 'assets/news/doc2.txt',
        },
      ],
    },
  ];

  constructor() {}

  getAllNews() {
    let news: {}[] = [];

    this.newsData.forEach((company) => {
      company.news.forEach((data) => {
        news.push(data);
        let index = news.indexOf(data);
        news[index]['company'] = company.company;
      });
    });

    return news;
  }

  getCompanyNews(company) {
    return this.newsData.filter((value) => company === value.company);
  }
}
