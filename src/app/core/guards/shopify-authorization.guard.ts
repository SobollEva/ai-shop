import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ShopifyAuthorizationService } from '../../authorization/shopify-authorization.service';

@Injectable()
export class ShopifyAuthorizationGuard implements CanActivate {
  constructor(private shopAuthorizationService: ShopifyAuthorizationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.shopAuthorizationService.shopifyAuthorization$(route.queryParams);
  }
}
