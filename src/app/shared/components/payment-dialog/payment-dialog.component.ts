import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
import { filter, finalize, map, tap } from 'rxjs/operators';
import { ShopifyAuthorizationService } from '../../../authorization/shopify-authorization.service';
import { PaymentDialogService } from './payment-dialog.service';
import { ChangePlan, Plane } from './payment.type';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent implements OnInit {
  public planeList: Plane[] = [];

  public isSetPlane = false;

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private paymentDialogService: PaymentDialogService,
              private shopifyAuthorizationService: ShopifyAuthorizationService) { }

  ngOnInit() {
    this.paymentDialogService.getPlaneList$()
      .pipe(
        map((response: Plane[]) =>
          response.filter((plane: Plane) =>
            plane.title !== this.shopifyAuthorizationService.getShopifyUserValue().plan.title))
      )
      .subscribe((response: Plane[]) => {
        this.planeList = response;
      });
  }

  public setPlane(planeId: number): void {
    this.paymentDialogService.setPlane$(planeId)
      .pipe(
        tap(() => this.isSetPlane = true),
        finalize(() => this.isSetPlane = false)
      )
      .subscribe((response: ChangePlan) => {
        window.location.href = response.confirmation_url;
      });
  }

  public close(): void {
    this.ref.close();
  }
}
