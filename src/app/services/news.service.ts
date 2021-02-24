import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class NewsService extends DataService {
  constructor(_http: HttpClient) {
    super('http://localhost:3000/api/news', _http);
  }
}
