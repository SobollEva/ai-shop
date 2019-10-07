import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  BulkCreateCampaign,
  Campaign,
  Draft,
  DraftParamsType,
  TemplateParamsType,
  VideoRender
} from '../../shared/interfaces/shared.type';
import { Widget } from './widget-publish/widget.type';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private widgetList$$: BehaviorSubject<Widget[]> = new BehaviorSubject<Widget[]>([]);
  public widgetList$ = this.widgetList$$.asObservable();

  public fixCampaignWidget$$: BehaviorSubject<any> = new BehaviorSubject(null);
  public fixCampaignWidget$ = this.fixCampaignWidget$$.asObservable();

  public addWidget(view: Draft<DraftParamsType, TemplateParamsType> | VideoRender, campaignSetup: BulkCreateCampaign): void {
    this.widgetList$$.next(this.widgetList$$.getValue()
      .concat({
        view: view,
        campaign: campaignSetup
      }));
  }

  public removeWidget(index: number): void {
    this.widgetList$$.getValue()
      .splice(index, 1);
    this.widgetList$$.next(this.widgetList$$.getValue()
    );
  }


}
