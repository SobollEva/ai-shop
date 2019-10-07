import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError, mergeMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { MetricsService } from '../core/services/metrics.service';
import { FacebookUser, FbAuthorizationResponse } from './authorization.type';
import { ShopifyAuthorizationService } from './shopify-authorization.service';

@Injectable({
  providedIn: 'root'
})
export class FbAuthorizationService {
  private host = environment.host;
  private fbUser$$: BehaviorSubject<FacebookUser> = new BehaviorSubject<FacebookUser>(null);

  constructor(
    private http: HttpClient,
    private metricsService: MetricsService
  ) { }

  public fbAuthorization(url: string): Observable<boolean> {
    if (this.fbUser$$.getValue()) {
      return of(true);
    }
    return this.http.get<FbAuthorizationResponse>(`${this.host}/api/shopify/info`)
      .pipe(
        catchError((error) => of(null)),
        mergeMap((response: FbAuthorizationResponse) => {
          if (response && 'user' in response) {
            this.fbUser$$.next(response.user);
            this.metricsService.trackEvent('SHOP fb authorization');
          } else {
            this.fbUser$$.next(null);
            window.location.href =
              `${this.host}/redirect?url=${encodeURIComponent(url)}`;
          }
          return of(Boolean(this.fbUser$$.getValue()));
        })
      );
  }
}
