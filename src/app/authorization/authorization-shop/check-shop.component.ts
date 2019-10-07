import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router/src/shared';
import { ShopifyAuthorizationService } from '../shopify-authorization.service';
import { ShopifyUser } from '../authorization.type';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-check-shop',
  template: ''
})
export class CheckShopComponent implements OnInit {
  private host = environment.host;

  constructor(private activateRouter: ActivatedRoute,
              private http: HttpClient,
              private router: Router,
              private authorizationService: ShopifyAuthorizationService) {}

  ngOnInit() {
    const queryParams: Params = this.activateRouter.snapshot.queryParams;
    this.http.get<ShopifyUser>(`${this.host}/api/shopify/check`,
      {params: queryParams})
      .subscribe((userShop: ShopifyUser) => {
        this.router.navigate(['app']);
      });
  }
}
