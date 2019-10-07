import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logger } from 'codelyzer/util/logger';
import { DialogService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogService } from '../../shared/components/error-dialog/error-dialog.service';
import { PaymentDialogComponent } from '../../shared/components/payment-dialog/payment-dialog.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private errorDialogService: ErrorDialogService,
              private dialogService: DialogService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(
        catchError(
          (err: HttpErrorResponse) => {
            if (err.error.error && err.error.error.code === 402) {
              this.dialogService.open(PaymentDialogComponent, {
                styleClass: 'payment-dialog',
                dismissableMask: true
              });
            } else if (!err.url.includes('bulk')) {
              this.errorDialogService.setError(err);
            }
            return throwError(err);
          }
        )
      );
  }
}
