import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ShopifyUser } from '../../../authorization/authorization.type';
import { FlipDraft } from '../../../shared/interfaces/shared.type';
import { CustomizeService } from '../../customize.service';

@Component({
  selector: 'app-flip-slides',
  templateUrl: './flip-slides.component.html',
  styleUrls: ['./flip-slides.component.scss']
})
export class FlipSlidesComponent implements OnInit {
  @Input() public setupView: FlipDraft;
  @Input() public draftWidth: number;
  @Input() public draftHeight: number;
  @Output() public currentColorElement: EventEmitter<string> = new EventEmitter();
  @Output() public isSetLastSlide: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public isPreviewDraftDisplay: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public customizeService: CustomizeService) { }

  ngOnInit(): void {
    this.addSlideToPreview(0);
  }

  addSlideToPreview(index: number): void {
    this.customizeService.activeSlide = index;
    this.customizeService.previewSlide = this.customizeService.productList[index];
    this.isSetLastSlide.emit(false);
  }

  showPreviewDraft(): void {
    this.isPreviewDraftDisplay.emit(true);
  }
}
