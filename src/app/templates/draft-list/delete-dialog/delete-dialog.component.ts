import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['../../templates.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  public dratTitle: string;

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig) { }

  ngOnInit() {
    this.dratTitle = this.config.data.title;
  }

  onHide(isDelete: boolean) {
    this.ref.close(isDelete);
  }
}
