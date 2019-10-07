import { EventEmitter, OnInit } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { SaleDraft } from '../../../shared/interfaces/shared.type';
import { CustomizeService } from '../../customize.service';


@Component({
  selector: 'app-sale-slides',
  templateUrl: './sale-slides.component.html',
  styleUrls: ['./sale-slides.component.scss']
})
export class SaleSlidesComponent implements OnInit {
  @Input() public setupView: SaleDraft;
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

  // TODO: delete customizeService.previewSlide
  addSlideToPreview(index: number, lastSlide: boolean): void {
    this.customizeService.activeSlide = index;
    this.customizeService.previewSlide = this.customizeService.productList[index];
    this.isSetLastSlide.emit(lastSlide);
  }

  showPreviewDraft(): void {
    this.isPreviewDraftDisplay.emit(true);
  }
}
