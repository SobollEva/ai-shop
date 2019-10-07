import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Campaign, VideoRender } from '../../shared/interfaces/shared.type';
import { FooterService } from './footer.service';
import { WidgetPublishComponent } from './widget-publish/widget-publish.component';
import { Widget } from './widget-publish/widget.type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChildren(WidgetPublishComponent) widgetList: QueryList<WidgetPublishComponent>;
  public widgetList$: Observable<Widget[]> = this.footerService.widgetList$;

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.footerService.fixCampaignWidget$
      .pipe(
        filter((fixWidget: { widgetId: string, campaign: Campaign }) => fixWidget !== null),
      )
      .subscribe((fixWidget: { widgetId: string, campaign: Campaign }) => {
        const currentWidget = this.widgetList
          .find((widget: WidgetPublishComponent) => fixWidget.widgetId === widget.widgetId);
        if (!currentWidget) {
          return;
        }
        currentWidget.initVideoChange(currentWidget.video$$.getValue());
        currentWidget.widgetSetup.campaign = fixWidget.campaign;
      });
  }

  public widgetRemove(index: number): void {
    this.footerService.removeWidget(index);
  }
}
