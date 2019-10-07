import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ShopifyUser } from './authorization/authorization.type';
import { ShopifyAuthorizationService } from './authorization/shopify-authorization.service';
import { MetricsService } from './core/services/metrics.service';
import { ErrorDialogComponent } from './shared/components/error-dialog/error-dialog.component';
import { ErrorDialogService } from './shared/components/error-dialog/error-dialog.service';
import * as Sentry from '@sentry/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private errorDialogService: ErrorDialogService,
              private view: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver,
              private shopifyAuthorizationService: ShopifyAuthorizationService,
              private metricsService: MetricsService) {}

  public errorComponent = this.componentFactoryResolver.resolveComponentFactory(ErrorDialogComponent);

  ngOnInit(): void {
    this.shopifyAuthorizationService.getShopifyUser$()
      .pipe(
        filter((user: ShopifyUser) => Boolean(user))
      )
      .subscribe((user: ShopifyUser) => {
        this.metricsService.waitForVendorApi('mixpanel', 500, '__loaded', (mixpanel) => {
          if (!mixpanel) {
            return;
          }
        });

        Sentry.configureScope((scope) => {
          scope.setUser({
            id: String(user.id),
            domain: user.domain,
          });
        });
      });

    this.errorDialogService.error$
      .pipe(
        filter((error: HttpErrorResponse) => error !== null)
      )
      .subscribe((error: HttpErrorResponse) => {
        // TODO: (prokopenko) looks like this components are never destroys.
        //  Maybe is better to create dialog component in template and use this single instance.
        const componentRef = this.view.createComponent(this.errorComponent);
        componentRef.instance.errorResponse = error;
      });
  }
}
