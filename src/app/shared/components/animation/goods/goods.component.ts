import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SubscriptionLike as ISubscription } from 'rxjs/index';
import { timer } from 'rxjs/internal/observable/timer';
import { Draft, GoodsDraft, GoodsTemplate, Product } from '../../../interfaces/shared.type';
import { draftFormat } from '../../../../customize/customize.format';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['../../../../customize/slides/goods-slides/goods-slides.component.scss', './goods.animation.scss']
})
export class GoodsComponent implements OnInit {
  private timer: ISubscription;
  @Input()
  public setupView: Draft<GoodsDraft, GoodsTemplate>;
  @Input()
  public previewFormat: string = '';
  @Input()
  public ratio: number = 1;
  @Input()
  public isPlay = false;

  public product: Product;
  public prevProduct: Product;
  public currentFormat: string;
  public draftWidth: number;
  public draftHeight: number;
  public zIndex = 5;

  public isOdd = false;
  public isPrevOdd = false;
  public isPoster = true;
  public isAnimation = false;
  public isLastSlide = false;
  public isLastSlideAnimation = false;
  public isFirstSlide = false;

  ngOnInit() {
    this.product = this.setupView.params.ids[0];
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
      this.timer = timer(0, 3000)
        .subscribe((resp) => {
          if (resp < this.setupView.params.ids.length) {
            this.isFirstSlide = resp === 0;
            this.product = this.setupView.params.ids[resp];
            this.prevProduct = this.isFirstSlide ? this.product : this.setupView.params.ids[resp - 1];
            this.isOdd = Boolean(resp % 2);
            this.isPrevOdd = this.isFirstSlide ? this.isOdd : Boolean((resp - 1) % 2);
            this.zIndex++;
          } else if (resp === this.setupView.params.ids.length) {
            this.isLastSlide = true;
            this.isAnimation = false;
          } else {
            this.isLastSlide = false;
            this.isPoster = true;
            this.product = this.setupView.params.ids[0];
            this.timer.unsubscribe();
            this.isPlay = false;
          }
        });
    }
  }
}
