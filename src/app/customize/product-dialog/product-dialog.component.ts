import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { MetricsService } from '../../core/services/metrics.service';
import { Product } from '../../shared/interfaces/shared.type';
import { CustomizeService } from '../customize.service';
import { ProductDialogService } from './product-dialog.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {
  public countProduct: number;
  public productRow = 5;
  public productList: Product[];

  public isShowProducts = true;
  public isProductsLoading = true;

  constructor(private customizeService: CustomizeService,
              private metricsService: MetricsService,
              private productDialogService: ProductDialogService) { }

  ngOnInit() {
      this.productDialogService.getProductCount$()
        .subscribe((count: { count: number }) => {
          this.countProduct = count.count;
          this.productDialogService.setCountProduct(count);
          this.chooseProductPage(1, '');
        });


    this.trackEvent('SHOP Customize button сhange product');
  }

  public chooseProductPage(page: number, searchTitle: string): void {
    this.isProductsLoading = true;
    this.productDialogService.getProductList$(page, this.productRow, searchTitle)
      .pipe(
        finalize(() => this.isProductsLoading = false)
      )
      .subscribe((response: Product[]) => {
        this.productList = response;
      });
  }

  public searchProduct(searchTitle: string): void {
    if (searchTitle) {
      this.productDialogService.getProductCount$(searchTitle)
        .subscribe((count: { count: number }) => this.countProduct = count.count);
    } else {
      this.countProduct = this.productDialogService.getCountProduct().count;
    }
    this.chooseProductPage(1, searchTitle);
  }

  public addProductToAd(product: Product, chooseImgUrl: string): void {
    this.trackEvent('SHOP Customize button choose product');
    this.customizeService.changeProduct({...product, image: chooseImgUrl});
    this.isShowProducts = false;
  }

  public trackEvent(event: string, eventOptions?: any): void {
    this.metricsService.trackEvent(event);
  }
}
