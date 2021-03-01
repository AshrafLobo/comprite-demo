import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  URL = 'http://localhost:3000/api/';

  private config = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

  constructor(private url: string, private _http: HttpClient) {
    this.URL = this.URL + url;
  }

  // Get one resource
  get(id) {
    return this._http
      .get(this.URL + '/' + id)
      .pipe(catchError(this.handleError));
  }

  // Get all resources
  getAll(issuerId?: string) {
    if (issuerId) {
      let params = new HttpParams().set('issuerId', issuerId);
      return this._http
        .get(`${this.URL}?${params.toString()}`)
        .pipe(catchError(this.handleError));
    }

    return this._http.get(this.URL).pipe(catchError(this.handleError));
  }

  // Create resource
  create(resource) {
    return this._http
      .post(this.URL, JSON.stringify(resource), {
        headers: this.config,
      })
      .pipe(catchError(this.handleError));
  }

  // Update resource
  update(resource, updateObject) {
    return this._http
      .put(`${this.URL}/${resource._id}`, JSON.stringify(updateObject), {
        headers: this.config,
      })
      .pipe(catchError(this.handleError));
  }

  // Delete resource
  delete(id) {
    return this._http
      .delete(`${this.URL}/${id}`, {
        headers: this.config,
      })
      .pipe(catchError(this.handleError));
  }

  // Handle error function
  private handleError(error: Response) {
    if (error.status === 404) return throwError(new NotFoundError());
    if (error.status === 400) return throwError(new BadInputError(error));
    return throwError(new AppError(error));
  }
}
