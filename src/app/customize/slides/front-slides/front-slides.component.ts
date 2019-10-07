import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FrontDraft } from '../../../shared/interfaces/shared.type';
import { CustomizeService } from '../../customize.service';

@Component({
  selector: 'app-front-slides',
  templateUrl: './front-slides.component.html',
  styleUrls: ['./front-slides.component.scss']
})
export class FrontSlidesComponent implements OnInit {
  @Input() public setupView: FrontDraft;
  @Input() public draftWidth: number;
  @Input() public draftHeight: number;
  @Output() public isSetLastSlide: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public currentColorElement: EventEmitter<string> = new EventEmitter();
  @Output() public isPreviewDraftDisplay: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isLastSlide = false;

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
