import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { ErrorDialogService } from './error-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService {
  constructor(
    private errorDialogService: ErrorDialogService,
    private zone: NgZone
  ) {}
  handleError(error: any): void {
    console.error('Error from global error handler', error);

    this.zone.run(() => {
      // Check if it's an error from an HTTP response
      if (error instanceof HttpErrorResponse) {
        // error = error?.rejection === undefined ? error : error?.rejection; // get the error object
        this.errorDialogService.openDialog(
          error?.message + error?.error?.message || 'Undefined client error',
          error?.status
        );
      }
    });
  }
}
