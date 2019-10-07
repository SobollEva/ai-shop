import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError, mergeMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ShopifyAuthorizationResponse, ShopifyUser } from './authorization.type';


@Injectable()
export class ShopifyAuthorizationService {
  private host = environment.host;
  private shopifyUser$$: BehaviorSubject<ShopifyUser> = new BehaviorSubject<ShopifyUser>(null);

  public isAuthorizationLoading = true;

  constructor(private http: HttpClient) { }

  public getShopifyUserValue(): ShopifyUser {
    return this.shopifyUser$$.getValue();
  }

  public getShopifyUser$(): Observable<ShopifyUser> {
    return this.shopifyUser$$.asObservable();
  }

  /**
   * Method for checking shop authorization
   */
  public shopifyAuthorization$(queryParams: Params): Observable<boolean> {
    return this.http.get<ShopifyAuthorizationResponse>(`${this.host}/api/shopify/info`)
      .pipe(
        catchError((error) => of(null)),
        mergeMap((response: ShopifyAuthorizationResponse) => {
          if (response && 'shop' in response) {
            this.isAuthorizationLoading = false;
            this.shopifyUser$$.next(response.shop);
          } else if ('hmac' in queryParams) {
            this.shopifyUser$$.next(null);
            this.http.get<{ authorization_url: string }>(`${this.host}/api/shopify/login`,
              {params: queryParams})
              .subscribe((responseLogin: { authorization_url: string }) => {
                window.location.href = responseLogin.authorization_url;
              });
          } else {
            window.location.href = 'https://aivideoapp.aitarget.com';
          }
          return of(Boolean(this.shopifyUser$$.getValue()));
        })
      );
  }
}
