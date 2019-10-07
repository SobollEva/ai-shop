import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { GoodsDraft } from '../../../shared/interfaces/shared.type';
import { CustomizeService } from '../../customize.service';

@Component({
  selector: 'app-goods-slides',
  templateUrl: './goods-slides.component.html',
  styleUrls: ['./goods-slides.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GoodsSlidesComponent implements OnInit {
  @Input() public setupView: GoodsDraft;
  @Input() public currentFormat: string;
  @Input() public draftWidth: number;
  @Input() public draftHeight: number;
  @Output() public isSetLastSlide: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public currentColorElement: EventEmitter<string> = new EventEmitter();
  @Output() public isPreviewDraftDisplay: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isLastSlide = false;
  public isOddSide = false;

  constructor(public customizeService: CustomizeService) { }

  ngOnInit(): void {
    this.addSlideToPreview(0, this.isOddSide, this.isLastSlide);
  }

  addSlideToPreview(index: number, evenSlide: boolean, lastSlide: boolean): void {
    this.isOddSide = evenSlide;
    this.isLastSlide = lastSlide;
    this.customizeService.activeSlide = index;
    this.customizeService.previewSlide = this.customizeService.productList[index];
    this.isSetLastSlide.emit(lastSlide);
  }

  showPreviewDraft(): void {
    this.isPreviewDraftDisplay.emit(true);
  }
}
