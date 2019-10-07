import { Component, HostListener, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent {
  @Input() control: AbstractControl;

  public emojiSize = 20;
  public emoji = 'point_up';
  public emojiForHandler = 'smile';
  public emojiSizeForHandler = 24;
  public title = 'Pick your emoji…';
  public sheetSize = 32;

  public isEmojiMartShown = false;

  @HostListener('mouseover', ['$event']) onMouseOver(event: MouseEvent) {
    this.isEmojiMartShown = true;
  }

  @HostListener('mouseout', ['$event']) onMouseOut(event: MouseEvent) {
    this.isEmojiMartShown = false;
  }

  public addEmoji(event): void {
    const controlText = this.control.value;
    this.control.setValue(`${controlText ? controlText : ''}${event.emoji.native}`);
  }

}
