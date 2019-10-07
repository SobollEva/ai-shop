import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { SubscriptionLike as ISubscription } from 'rxjs';
import {
  Draft,
  Product,
  SaleDraft,
  SaleTemplate
} from '../../../interfaces/shared.type';
import { fixDeletedProduct } from '../../../shared';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['../../../../customize/slides/sale-slides/sale-slides.component.scss', './sale.animation.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SaleComponent implements OnInit {
  private timer: ISubscription;
  @Input()
  public setupView: Draft<SaleDraft, SaleTemplate>;
  @Input()
  public ratio: number = 1;
  @Input()
  public isPlay = false;

  public draftWidth: number = 4;
  public draftHeight: number = 5;
  public productList: Product[];
  public product: Product;

  public isLastSlide = false;
  public isLastSlideAnimation = false;
  public isAnimation = false;
  public isPoster = true;

  ngOnInit() {
    this.productList = fixDeletedProduct(this.setupView.params.ids);
    this.product = this.productList[0];
    this.draftWidth = this.draftWidth * this.ratio;
    this.draftHeight = this.draftHeight * this.ratio;
    this.showAnimation(this.isPlay);
  }

  showAnimation(play: boolean): void {
    if (play) {
      this.isPlay = true;
      this.isPoster = false;
      this.isAnimation = true;
      this.timer = timer(0, 3000)
        .subscribe((response: number) => {
          if (response < this.productList.length) {
            this.product = this.productList[response];
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

