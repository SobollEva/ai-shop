import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject, timer } from 'rxjs';
import { catchError, concatMap, filter, switchMap, takeUntil, tap } from 'rxjs/operators';
import { MetricsService } from '../../../core/services/metrics.service';
import { BulkService } from '../../../core/services/bulk.service';
import { VideoRenderService } from '../../../core/services/video-render.service';
import {
  BulkCreateCampaign,
  Draft,
  DraftParamsType, TemplateParamsType,
  VideoRender,
  VideoUploadToFb
} from '../../../shared/interfaces/shared.type';
import { PublishService } from '../../../publish/publish.service';
import { AdAccount } from '../../../publish/publish.type';
import { Widget } from './widget.type';

const videoRenderTimeout = 5000;
const videoUploadTimeout = 3000;


// TODO: (prokopenko) move helpers to global file
// TODO: (prokopenko) input types?
function findValues(obj, key) {
  return findValuesHelper(obj, key, []);
}

// TODO: (prokopenko) input types?
function findValuesHelper(obj, key, list) {
  if (!obj) {
    return list;
  }
  if (obj instanceof Array) {
    // TODO: (prokopenko) it's better to use Object.values
    Object.keys(obj)
      .forEach((i) => list = list.concat(findValuesHelper(obj[i], key, [])));
    return list;
  }

  if (obj[key]) {
    list.push(obj[key]);
  }

  if ((typeof obj === 'object') && (obj !== null)) {
    // TODO: (prokopenko) variable name looks like it should be Object.values(obj); Next it more convenient.
    const children = Object.keys(obj);
    // TODO: (prokopenko) useless if
    if (children.length > 0) {
      // TODO: (prokopenko) don't use plain cycles.
      //  It's better to use functional analogs. children.map() or children.reduce() or children.forEach().
      //  Reduce is the best in this case
      for (let i = 0; i < children.length; i++) {
        list = list.concat(findValuesHelper(obj[children[i]], key, []));
      }
    }
  }
  return list;
}

@Component({
  selector: 'app-widget-publish',
  templateUrl: './widget-publish.component.html',
  styleUrls: ['./widget-publish.component.scss']
})
export class WidgetPublishComponent implements OnInit, OnDestroy {
  @Input() widgetSetup: any;
  @Output() widgetRemove = new EventEmitter();

  private renderTaskId: number;
  private unsubscribe$$: Subject<void> = new Subject<void>();
  private unsubscribe$ = this.unsubscribe$$.asObservable();

  public errorCreateCampaignMessage: string;
  public valueProgressBar: number = 0;
  public campaignHref: string;
  public widgetId: string;
  public video$$: BehaviorSubject<VideoRender> = new BehaviorSubject<VideoRender>(null);
  public video$: Observable<VideoRender> = this.video$$.asObservable();

  public isErrorCreateCampaign = false;
  public isWidgetMini = false;

  constructor(private bulkService: BulkService,
              private videoRenderService: VideoRenderService,
              private publishService: PublishService,
              private router: Router,
              private metricsService: MetricsService) { }

  ngOnInit() {
    this.initVideoChange();
    if (!('result' in this.widgetSetup.view)) {
      this.renderVideoFromDraft(this.widgetSetup.view);
    } else {
      this.video$$.next(this.widgetSetup.view);
    }
  }

  private renderVideoFromDraft(draft: Draft<DraftParamsType, TemplateParamsType>): void {
    const draftParams = draft.template ? {} : {data: draft.params};
    if (draft.template) {
      const params = draft.params;
      Object.keys(params)
        .forEach((prop: string) => {
          if (typeof params[prop] === 'string') {
            draftParams[prop] = params[prop].replace('#', '');
          }
        });
      draftParams['products'] = params.ids;
    }
    // TODO: (sobolevskaya) setup video render error
    this.videoRenderService.createVideoRenderTask$(draft.template
      ? draft.template.id
      : null,
      draftParams)
      .pipe(
        tap((renderTask: VideoRender) => this.renderTaskId = renderTask.id),
        concatMap((renderTask: VideoRender) => this.getVideoUrlPoll$(renderTask.id)
          .pipe(
            tap((videoRenderStatus: VideoRender) => {
              this.valueProgressBar = videoRenderStatus.progress
                ? Number(videoRenderStatus.progress) * 0.9
                : 3;
              // TODO: (sobolevskaya) убрать дублирование unsubscribe$$
              if (videoRenderStatus.result && videoRenderStatus.status !== 'error') {
                this.unsubscribe$$.next();
                this.video$$.next(videoRenderStatus);
              } else if (videoRenderStatus.status === 'error') {
                this.unsubscribe$$.next();
                this.video$$.next(null);
              }
            }),
            catchError(() => of(null))
          )
        )
      )
      .subscribe();
  }

  public initVideoChange(videoFromForm?: VideoRender): void {
    // TODO: (sobolevskaya) add checking if adaccout_id change
    if (videoFromForm) {
      this.video$$.next(videoFromForm);
    }
    this.video$
      .pipe(
        filter((video: VideoRender) => Boolean(video)),
        tap((video: VideoRender) => {
          this.isErrorCreateCampaign = false;
          this.valueProgressBar = 91;
          this.widgetSetup.campaign.render_task_id = video.id;
        }),
        switchMap((video: VideoRender) =>
          this.bulkService.saveVideoToFb$(this.widgetSetup.campaign.id, video.result)),
        concatMap((videoToFb: { id: string }) => this.fbVideoUploadPoll$(videoToFb)),
        tap((videoFb: VideoUploadToFb) => {
          this.unsubscribe$$.next();
          this.valueProgressBar = 95;
          this.widgetSetup.campaign.campaigns[0].adsets[0].ads[0].creative.object_story_spec.video_data.video_id = videoFb.id;
          this.widgetSetup.campaign.campaigns[0].adsets[0].ads[0].creative.object_story_spec.video_data.image_url = videoFb.picture;
        }),
        concatMap((videoFromFb: VideoUploadToFb) =>
          this.bulkService.createCampaign$(this.widgetSetup.campaign)),
        catchError((campaignError: HttpErrorResponse) => {
          this.isErrorCreateCampaign = true;
          const errorCreateCampaign = findValues(campaignError.error, 'error')[0];
          this.errorCreateCampaignMessage = errorCreateCampaign && errorCreateCampaign.hasOwnProperty('error_user_msg')
            ? `${errorCreateCampaign.error_user_title}. ${errorCreateCampaign.error_user_msg}`
            : 'Ad was not created.';
          this.widgetId = campaignError.error.campaigns[0].id;
          return of(null);
        }),
        filter((createCampaign: BulkCreateCampaign) => createCampaign !== null)
      )
      .subscribe((createCampaign: BulkCreateCampaign) => {
        this.metricsService.trackEvent('SHOP Publish success create campaign');
        this.valueProgressBar = 100;
        this.isErrorCreateCampaign = false;
        this.campaignHref = ['https://business.facebook.com/adsmanager/manage/campaigns?',
          createCampaign.id.replace('_', '='),
          '&selected_campaign_ids=',
          createCampaign.campaigns[0].adsets[0].ads[0].id].join('');
      });
  }

  public errorCreateCampaign(): void {
    this.publishService.setWidgetForm(this.widgetSetup.campaign, this.widgetId);
    this.router.navigate(['/app/publish'],
      {
        queryParams:
          {
            template: this.widgetSetup.view.template ? this.widgetSetup.view.template.name : '',
            draft_id: this.widgetSetup.view.result ? '' : this.widgetSetup.view.id,
            video_id: this.widgetSetup.view.result ? this.widgetSetup.view.id : ''
          }
      }
    );
  }

  public getVideoUrlPoll$(renderTaskId): Observable<VideoRender> {
    return timer(0, videoRenderTimeout)
      .pipe(
        takeUntil(this.unsubscribe$),
        concatMap(() => this.videoRenderService.getVideoRenderStatus$(renderTaskId)
        )
      );
  }

  public fbVideoUploadPoll$(videoId: { id: string }): Observable<VideoUploadToFb> {
    return timer(0, videoUploadTimeout)
      .pipe(
        takeUntil(this.unsubscribe$),
        concatMap(() => this.bulkService.getUploadVideoFromFb$(videoId.id)),
        filter((videoFb: VideoUploadToFb) => videoFb.status.video_status === 'ready')
      );
  }

  public setWidgetHide(): void {
    this.widgetRemove.emit();
  }

  public setWidgetClose(): void {
    this.setWidgetHide();
    this.ngOnDestroy();
  }

  public setWidgetForm(): void {
    this.isWidgetMini = !this.isWidgetMini;
  }

  ngOnDestroy(): void {
    this.unsubscribe$$.next();
    this.video$$.unsubscribe();
  }
}
