import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {

  private error$$: BehaviorSubject<HttpErrorResponse> = new BehaviorSubject<HttpErrorResponse>(null);
  public error$ = this.error$$.asObservable();

  public setError(error: HttpErrorResponse): void {
    this.error$$.next(error);
  }
}
