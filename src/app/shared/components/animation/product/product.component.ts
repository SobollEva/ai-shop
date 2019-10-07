import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { Draft, Product, ProductDraft, ProductTemplate } from '../../../interfaces/shared.type';
import { SubscriptionLike as ISubscription } from 'rxjs';
import { draftFormat } from '../../../../customize/customize.format';
import { fixDeletedProduct } from '../../../shared';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['../../../../customize/slides/product-slides/product-slides.component.scss', './product.animation.scss']
})
export class ProductComponent implements OnInit {
  private timer: ISubscription;

  @Input()
  public setupView: Draft<ProductDraft, ProductTemplate>;
  @Input()
  public previewFormat: string = '';
  @Input()
  public ratio: number = 1;
  @Input()
  public isPlay = false;

  public productList: Product[];
  public product: Product;
  public currentFormat: string;
  public draftWidth: number;
  public draftHeight: number;

  public isPoster = true;
  public isAnimation = false;
  public isLastSlide = false;
  public isLastSlideAnimation = false;
  public isFirstSlide = true;

  ngOnInit() {
    this.productList = fixDeletedProduct(this.setupView.params.ids);
    this.product = this.productList[0];
    this.currentFormat = draftFormat[this.previewFormat || this.setupView.template.format].class;
    this.draftWidth = this.previewFormat
      ? draftFormat[this.previewFormat].width * this.ratio
      : draftFormat[this.setupView.template.format].width * this.ratio;
    this.draftHeight = this.previewFormat
      ? draftFormat[this.previewFormat].height * this.ratio
      : draftFormat[this.setupView.template.format].height * this.ratio;
    this.showAnimation(this.isPlay);
  }

  showAnimation(play: boolean): void {
    if (play) {
      this.isPlay = true;
      this.isPoster = false;
      this.isAnimation = true;
      this.timer = timer(0, 3500)
        .subscribe((response: number) => {
          if (response < this.productList.length) {
            this.product = this.productList[response];
            this.isFirstSlide = response === 0;
          } else if (response === this.productList.length) {
            this.isLastSlide = true;
            this.isAnimation = false;
            this.isLastSlideAnimation = true;
          } else {
            this.isLastSlide = false;
            this.isPoster = true;
            this.product = this.productList[0];
            this.timer.unsubscribe();
            this.isPlay = false;
          }
        });
    }
  }

}
