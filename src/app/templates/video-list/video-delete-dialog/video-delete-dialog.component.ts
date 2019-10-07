import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/api';

@Component({
  selector: 'app-video-delete-dialog',
  templateUrl: './video-delete-dialog.component.html',
  styleUrls: ['../../templates.component.scss']
})
export class VideoDeleteDialogComponent {

  constructor(private ref: DynamicDialogRef) { }

  onHide(isDelete: boolean) {
    this.ref.close(isDelete);
  }
}
