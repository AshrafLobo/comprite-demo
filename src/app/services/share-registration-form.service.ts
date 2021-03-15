import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ShareRegistrationFormService extends DataService {
  constructor(_http: HttpClient) {
    super('share-registration-forms', _http);
  }
}
