import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private config = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

  constructor(private url: string, private _http: HttpClient) {}

  // Get all resources
  getAll() {
    return this._http.get(this.url).pipe(catchError(this.handleError));
  }

  // Create resource
  create(resource) {
    return this._http
      .post(this.url, JSON.stringify(resource), {
        headers: this.config,
      })
      .pipe(catchError(this.handleError));
  }

  // Update resource
  update(resource, updateObject) {
    return this._http
      .put(`${this.url}/${resource._id}`, JSON.stringify(updateObject), {
        headers: this.config,
      })
      .pipe(catchError(this.handleError));
  }

  // Delete resource
  delete(id) {
    return this._http
      .delete(`${this.url}/${id}`, {
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
