import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appFontColor]'
})
export class FontColorDirective {
  @Output()
  public currentElement: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public appFontColor: string;

  public positionMouseDown: number;
  public isMouseMove: boolean;

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.elemRef.nativeElement.style.opacity = '1';
  }

  @HostListener('dblclick', ['$event']) onDblclick(event: MouseEvent) {
    this.currentElement.emit(this.appFontColor);
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
    this.positionMouseDown = event.screenX;
  }

  @HostListener('mouseup', ['$event']) onMouseUp(event: MouseEvent) {
    this.isMouseMove = this.positionMouseDown !== event.screenX;
    if (this.isMouseMove) {
      this.currentElement.emit(this.appFontColor);
    }
  }

  constructor(private elemRef: ElementRef) {}
}
