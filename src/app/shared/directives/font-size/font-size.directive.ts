import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  AfterViewInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective implements AfterViewInit, OnChanges {
  @Input()
  public limitSizeList: number[];
  @Input()
  public fontSizeList: number[];
  @Input()
  public appFontSize: string;

  constructor(private elemRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.hasOwnProperty('appFontSize')) {
      return;
    }
    this.changingFontSize();
  }

  ngAfterViewInit(): void {
    this.changingFontSize();
  }

  changingFontSize(): void {
    if (this.appFontSize) {
      this.limitSizeList.forEach((item, index) => {
        if (item >= this.appFontSize.length) {
          this.elemRef.nativeElement.style.fontSize = `${this.fontSizeList[index]}px`;
        }
      });
    }
  }
}
