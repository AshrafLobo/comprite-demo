import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class AgmsService extends DataService {
  constructor(_http: HttpClient) {
    super('agms', _http);
  }
}
