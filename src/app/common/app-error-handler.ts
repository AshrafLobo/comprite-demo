import { Injectable, NgZone } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(private _snackBar: MatSnackBar, private zone: NgZone) {}

  handleError(error) {
    this.zone.run(() => {
      this._snackBar.open('An unexpected error occured', 'Dismiss', {
        duration: 5000,
        horizontalPosition: 'start',
        verticalPosition: 'bottom',
      });
    });

    console.log(error);
  }
}
