import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/api';
import { templateDemoformat } from '../templates-choice.constant';

interface TemplatePreview {
  width: number;
  example: string;
  preview: string;
}

@Component({
  selector: 'app-templates-demo-dialog',
  templateUrl: './templates-demo-dialog.component.html',
  styleUrls: ['./templates-demo-dialog.component.scss']
})

export class TemplatesDemoDialogComponent implements OnInit {
  public videoDemo: TemplatePreview[] = [];

  constructor(private config: DynamicDialogConfig) { }

  ngOnInit() {
    if (this.config.data.templateGroup.example) {
      this.videoDemo = [{
        width: templateDemoformat[this.config.data.templateGroup.format].width,
        example: this.config.data.templateGroup.example,
        preview: this.config.data.templateGroup.preview
      }];
    } else {
      this.config.data.templateGroup.templates
        .map((template) => ({
          width: templateDemoformat[template.format].width,
          example: template.example,
          preview: template.preview
        }))
        .forEach((template) => {
          if (template.preview) {
            this.videoDemo.push(template);
          }
        });
    }
  }
}
