import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DanceDraft } from '../../../shared/interfaces/shared.type';
import { CustomizeService } from '../../customize.service';

@Component({
  selector: 'app-dance-slides',
  templateUrl: './dance-slides.component.html',
  styleUrls: ['./dance-slides.component.scss']
})
export class DanceSlidesComponent implements OnInit {
  @Input() public setupView: DanceDraft;
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
