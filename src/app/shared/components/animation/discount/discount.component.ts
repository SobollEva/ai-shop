import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { SubscriptionLike as ISubscription } from 'rxjs';
import { draftFormat } from '../../../../customize/customize.format';
import { DiscountDraft, DiscountTemplate, Draft, Product } from '../../../interfaces/shared.type';
import { fixDeletedProduct } from '../../../shared';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['../../../../customize/slides/discount-slides/discount-slides.component.scss', './discount.animation.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DiscountComponent implements OnInit {
  private timer: ISubscription;
  @Input()
  public setupView: Draft<DiscountDraft, DiscountTemplate>;
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


  public isEven = true;
  public isPoster = true;
  public isAnimation = false;
  public isLastSlide = false;
  public isLastSlideAnimation = false;
  public isHiddenPlane = false;

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
            this.isEven = !Boolean(response % 2);
            this.isHiddenPlane = Boolean(response === this.productList.length - 1);
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
