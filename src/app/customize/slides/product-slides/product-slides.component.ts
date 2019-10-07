import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ProductDraft } from '../../../shared/interfaces/shared.type';
import { CustomizeService } from '../../customize.service';

@Component({
  selector: 'app-product-slides',
  templateUrl: './product-slides.component.html',
  styleUrls: ['./product-slides.component.scss']
})
export class ProductSlidesComponent implements OnInit {

  @Input() public setupView: ProductDraft;
  @Input() public currentFormat: string;
  @Input() public draftWidth: number;
  @Input() public draftHeight: number;
  @Output() public isSetLastSlide: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public currentColorElement: EventEmitter<string> = new EventEmitter();
  @Output() public isPreviewDraftDisplay: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isLastSlide = false;

  constructor(public customizeService: CustomizeService) { }

  ngOnInit(): void {
    this.addSlideToPreview(0, false);
  }

  addSlideToPreview(index: number, lastSlide: boolean): void {
    this.isLastSlide = lastSlide;
    this.customizeService.activeSlide = index;
    this.customizeService.previewSlide = this.customizeService.productList[index];
    this.isSetLastSlide.emit(lastSlide);
  }

  showPreviewDraft(): void {
    this.isPreviewDraftDisplay.emit(true);
  }
}
