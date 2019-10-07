import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { SubscriptionLike as ISubscription } from 'rxjs';
import { Draft, FlipDraft, FlipTemplate, Product } from '../../../interfaces/shared.type';
import { fixDeletedProduct } from '../../../shared';

@Component({
  selector: 'app-flip',
  templateUrl: './flip.component.html',
  styleUrls: ['../../../../customize/slides/flip-slides/flip-slides.component.scss',
    './flip.animation.scss']
})
export class FlipComponent implements OnInit {
  private timer: ISubscription;
  @Input()
  public setupView: Draft<FlipDraft, FlipTemplate>;
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
    this.draftWidth = this.draftWidth * this.ratio;
    this.draftHeight = this.draftHeight * this.ratio;
    this.product = this.setupView.params.ids[0];
    this.showAnimation(this.isPlay);
  }

  showAnimation(play: boolean): void {
    if (play) {
      this.isPlay = true;
      this.timer = timer(0, 3000)
        .subscribe((response: number) => {
          if (response < this.productList.length) {
            this.product = this.productList[response];
            this.isAnimation = true;
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
