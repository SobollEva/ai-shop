import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';

@Component({
  selector: 'app-duplicate-dialog',
  templateUrl: './duplicate-dialog.component.html',
  styleUrls: ['../../templates.component.scss']
})
export class DuplicateDialogComponent implements OnInit {
  public draftTitle: string;

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig) { }

  ngOnInit() {
    this.draftTitle = this.config.data.title;
  }

  onHide(draftTitle: string) {
    this.ref.close(draftTitle === '' ? this.draftTitle : draftTitle);
  }
}
