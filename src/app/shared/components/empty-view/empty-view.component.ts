import { Component } from '@angular/core';
import { TemplatesService } from '../../../templates/templates.service';

@Component({
  selector: 'app-empty-view',
  templateUrl: './empty-view.component.html',
  styleUrls: ['./empty-view.component.scss']
})
export class EmptyViewComponent {
  constructor(public templatesService: TemplatesService) {}

  public toggleEditor(): void {
    this.templatesService.setSwitchToEditor();
  }
}
