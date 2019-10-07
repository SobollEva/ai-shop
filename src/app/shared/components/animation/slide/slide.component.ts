import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { SubscriptionLike as ISubscription } from 'rxjs';
import { Draft, Product, SlideDraft, SlideTemplate } from '../../../interfaces/shared.type';
import { fixDeletedProduct } from '../../../shared';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['../../../../customize/slides/slide-slides/slide-slides.component.scss',
    './slide.animation.scss']
})
export class SlideComponent implements OnInit {
  private timer: ISubscription;
  @Input()
  public setupView: Draft<SlideDraft, SlideTemplate>;
  @Input()
  public ratio: number = 1;
  @Input()
  public isPlay = false;

  public draftWidth: number = 9;
  public draftHeight: number = 16;
  public productList: Product[];
  public product: Product;

  public isAnimation = false;

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
      this.isAnimation = true;
      this.timer = timer(0, 3000)
        .subscribe((response: number) => {
          if (response < this.productList.length) {
            this.product = this.productList[response];
          } else {
            this.product = this.productList[0];
            this.isAnimation = false;
            this.timer.unsubscribe();
            this.isPlay = false;
          }
        });
    }
  }
}
