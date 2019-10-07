import { AfterViewInit, Component, Input } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-custom-draft',
  templateUrl: './custom-draft.component.html',
  styleUrls: ['./custom-draft.component.scss']
})
export class CustomDraftComponent implements AfterViewInit {
  @Input()
  public draft;
  public isSign = true;
  public playerwrap;
  public options = {
    'fonts_loader': true,
    'background_video_path_namespace': 'lowq_'
  };

  ngAfterViewInit() {
    const scale = this.draft.params.size[0] === 854 ? '0.285' : (this.draft.params.size[0] === 600 ? '0.255' : '0.24');
    const left = this.draft.params.size[0] === 854 ? 'left' : (this.draft.params.size[0] === 600 ? '66px' : '102px');
    this.playerwrap = $(`<div class="playerwrap ${this.draft.id}" style="transform-origin: ${left} top; transform:scale(${scale});"></div>`)
      .appendTo(`#${this.draft.id}`);
    const player = new (window as any).AivideoPlayer(this.playerwrap, this.draft.params, this.options);
  }


  public playAnimation(isPlay: boolean): void {
    const player = new (window as any).AivideoPlayer(this.playerwrap, this.draft.params, this.options);
    player.play();
    this.isSign = false;
  }

  public stopAnimation(): void {
    const player = new (window as any).AivideoPlayer(this.playerwrap, this.draft.params, this.options);
    player.pause();
    this.isSign = true;
  }
}
