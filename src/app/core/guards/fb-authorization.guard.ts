import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FbAuthorizationService } from '../../authorization/fb-authorization.service';
import { ShopifyAuthorizationService } from '../../authorization/shopify-authorization.service';

@Injectable({
  providedIn: 'root'
})
export class FbAuthorizationGuard implements CanActivate {
  constructor(private authorizationService: FbAuthorizationService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.authorizationService.fbAuthorization(window.location.origin + state.url);
  }
}
