import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DialogService } from 'primeng/api';
import { Observable } from 'rxjs/Observable';
import {
  catchError,
  filter, finalize, startWith, switchMap,
  takeUntil,
  tap
} from 'rxjs/operators';
import { merge, of } from 'rxjs';
import { MetricsService } from '../core/services/metrics.service';
import { DraftService } from '../core/services/draft.service';
import { PipelineService } from '../core/services/pipeline.service';
import { VideoRenderService } from '../core/services/video-render.service';
import { Widget } from '../layout/footer/widget-publish/widget.type';
import {
  BulkCreateCampaign,
  Campaign,
  Draft,
  DraftParamsType,
  TemplateParamsType,
  VideoRender
} from '../shared/interfaces/shared.type';
import { CustomizeService } from '../customize/customize.service';
import { FooterService } from '../layout/footer/footer.service';
import { PublishService } from './publish.service';
import {
  Ad,
  AdAccount, Adset,
  DeliveryEstimateItem,
  DeliveryEstimates,
  Targeting
} from './publish.type';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  public formPublish: FormGroup = new FormGroup({});
  public reachInfo: DeliveryEstimateItem;
  public draftView: string;

  public currentDraft: Draft<DraftParamsType, TemplateParamsType>;
  public currentVideo: VideoRender;
  public renderTaskId: number;
  public activeAdAccount: AdAccount;
  public widgetCampaignId: string;
  public activeIndexTab = 0;
  public widgetList$: Observable<Widget[]> = this.footerService.widgetList$;

  public isLoadDraft = true;
  public isFormLoading = true;
  public isUseExistingAdset = false;
  public isReachHide = false;
  public isWidgetForm = false;
  public isMainFormChecked = false;
  public isTargetingFormChecked = false;
  public isCreativeFormChecked = false;
  public isMainPanelDisabled = false;
  public isTargetingPanelDisabled = false;
  public isCreativePanelDisabled = false;
  public isPipelineCreate = false;

  constructor(public publishService: PublishService,
              private customizeService: CustomizeService,
              private activatedRouter: ActivatedRoute,
              private metricsService: MetricsService,
              private draftService: DraftService,
              private footerService: FooterService,
              private videoRenderService: VideoRenderService,
              private dialogService: DialogService,
              private pipelineService: PipelineService,
              private router: Router) { }

  ngOnInit() {
    this.metricsService.trackEvent('SHOP Publish visit');
    const queryParams: Params = this.activatedRouter.snapshot.queryParams;
    const getPreviewUrl$: Observable<Draft<DraftParamsType, TemplateParamsType> | VideoRender> = queryParams.draft_id
      ? this.draftService.get$(Number(queryParams.draft_id))
      : this.videoRenderService.getVideoRenderStatus$(Number(queryParams.video_id));

    getPreviewUrl$
      .pipe(
        tap(() => this.isLoadDraft = true),
        finalize(() => this.isLoadDraft = false),
      )
      .subscribe((response: Draft<DraftParamsType, TemplateParamsType> | VideoRender) => {
        if ('result' in response) {
          this.draftView = 'video';
          this.currentVideo = response;
        } else if ('template' in response) {
          this.currentDraft = response;
          if (response.template) {
            this.draftView = response.template.name;
          } else {
            this.draftView = '';
          }
        }
      });

    this.formPublish.valueChanges
      .pipe(
        filter((response) => {
          return Boolean(response.formMain
            && response.formTargeting
            && response.formCreative
            && response.formMain.selectedAdAccount
            && response.formMain.selectedPixel);
        }),
        tap(() => this.isFormLoading = false),
        takeUntil(this.publishService.unsubscribeForm$)
      )
      .subscribe((response) => {
        this.publishService.unsubscribeForm$$.next();
        const formMain = this.formPublish.get('formMain');
        const formTargeting = this.formPublish.get('formTargeting');
        const pixelChanges$ = formMain.get('selectedPixel').valueChanges;
        const goalChanges$ = formMain.get('optimizationGoal').valueChanges;
        const pixelEventChanges$ = this.formPublish.get('formCreative')
          .get('pixelEvent').valueChanges;
        const genderChanges$ = formTargeting.get('selectedGender').valueChanges;
        const ageChanges$ = formTargeting.get('formAge').valueChanges;
        const geoChanges$ = formTargeting.get('targetingGeo').valueChanges;
        const detailedChanges$ = formTargeting.get('targetingDetailed').valueChanges;
        merge(pixelChanges$, goalChanges$, pixelEventChanges$, genderChanges$, ageChanges$, geoChanges$, detailedChanges$)
          .pipe(
            startWith(true),
            switchMap(() => this.getTargetingReach$())
          )
          .subscribe();
      });

    this.formPublish.valueChanges
      .pipe(
        filter((response) => {
          return Boolean(response.formMain
            && response.formTargeting
            && response.formCreative);
        })
      )
      .subscribe(() => {
        this.setPanelDisabled();
      });

    this.publishService.widgetForm$
      .pipe(
        tap(() => this.isWidgetForm = false),
        filter((widgetForm) => Boolean(widgetForm))
      )
      .subscribe((widgetForm) => {
        this.isWidgetForm = true;
        this.widgetCampaignId = widgetForm.widgetId;
      });
  }

  public getTargetingReach$(): Observable<DeliveryEstimates> {
    this.isUseExistingAdset = this.formPublish.get('formMain.adset') && this.formPublish.get('formMain.adset').value.id;
    this.isReachHide = !(this.formPublish.get('formMain')
        .get('selectedPixel').value.id)
      || this.isUseExistingAdset
      || this.formPublish.get('formTargeting')
        .get('targetingGeo').invalid
      || this.formPublish.get('formTargeting').invalid;
    if (this.isReachHide) {
      return;
    }
    const reachParams = {
      id: this.formPublish.get('formMain.selectedAdAccount').value.id,
      optimization_goal: this.formPublish.get('formMain.optimizationGoal').value,
      promoted_object: {
        pixel_id: this.formPublish.get('formMain.selectedPixel').value.id,
        custom_event_type: this.formPublish.get('formCreative.pixelEvent').value.value
      }
    };
    return this.publishService.getTargetingReach$(reachParams, this.getTargeting())
      .pipe(
        catchError(error => of(error)),
        tap((response: DeliveryEstimates) => this.reachInfo = response.delivery_estimates[0].data[0])
      );
  }

  public getTargeting(): Targeting {
    const formTargeting = this.formPublish.get('formTargeting');
    return {
      age_max: Number(formTargeting.get('formAge.selectedMaxAge').value),
      age_min: Number(formTargeting.get('formAge.selectedMinAge').value),
      genders: formTargeting.get('selectedGender').value === 'all'
        ? []
        : Array.of(formTargeting.get('selectedGender').value),
      geo_locations: formTargeting.get('targetingGeo').value.geo_locations,
      excluded_geo_locations: formTargeting.get('targetingGeo').value.excluded_geo_locations,
      flexible_spec: Boolean(formTargeting.get('targetingDetailed').value.flexible_spec)
        ? formTargeting.get('targetingDetailed').value.flexible_spec
        : [{}],
      exclusions: Boolean(formTargeting.get('targetingDetailed').value.exclusions)
        ? formTargeting.get('targetingDetailed').value.exclusions
        : {}
    };
  }

  public setActiveTab(index: number): void {
    if (this.formPublish.invalid) {
      return;
    }
    this.activeIndexTab = index;
    this.isMainFormChecked = false;
    this.isTargetingFormChecked = false;
    this.isCreativeFormChecked = false;
  }

  public tabChange(event): void {
    this.setActiveTab(event.index);
  }

  public campaignSetup(): BulkCreateCampaign {
    const campaignParams = this.formPublish.getRawValue();
    const adList: Ad[] = [{
      name: campaignParams.formCreative.adName,
      status: 'ACTIVE',
      creative: {
        object_story_spec: {
          page_id: campaignParams.formMain.selectedFbPage.id,
          instagram_actor_id: campaignParams.formMain.selectedIgAccount
            ? campaignParams.formMain.selectedIgAccount.id
            : campaignParams.formMain.selectedIgAccount,
          video_data: {
            call_to_action: {
              value: {
                link: campaignParams.formCreative.url.url
              },
              type: 'SHOP_NOW'
            },
            message: campaignParams.formCreative.text,
            title: campaignParams.formCreative.headline,
            image_url: null,
            video_id: null
          }
        }
      }
    }];
    const adsetList: Adset[] = campaignParams.formMain.adset.id
      ? [{
        id: campaignParams.formMain.adset.id,
        ads: adList
      }]
      : [{
        name: campaignParams.formMain.adset,
        status: 'ACTIVE',
        promoted_object: {
          pixel_id: campaignParams.formMain.selectedPixel.id,
          custom_event_type: campaignParams.formCreative.pixelEvent.value
        },
        optimization_goal: campaignParams.formMain.optimizationGoal,
        billing_event: campaignParams.formMain.billingEvent,
        daily_budget: Number(campaignParams.formMain.dailyBudget),
        bid_strategy: campaignParams.formMain.formBid.bidStrategy,
        bid_amount: campaignParams.formMain.formBid.bidStrategy !== 'LOWEST_COST_WITHOUT_CAP'
          ? Number(campaignParams.formMain.formBid.bidAmount)
          : null,
        start_time: campaignParams.formMain.schedule[0].toISOString()
          .split('T')[0] + 'T23:59:59+03:00',
        end_time: campaignParams.formMain.schedule[1].toISOString()
          .split('T')[0] + 'T23:59:59+03:00',
        ads: adList,
        targeting: this.getTargeting()
      }];
    const campaignList: Campaign[] = [{
      id: campaignParams.formMain.campaign.id ? campaignParams.formMain.campaign.id : null,
      name: campaignParams.formMain.campaign.id ? campaignParams.formMain.campaign.name : campaignParams.formMain.campaign,
      objective: 'CONVERSIONS',
      status: 'ACTIVE',
      adsets: adsetList
    }];
    return {
      id: campaignParams.formMain.selectedAdAccount.id,
      render_task_id: this.renderTaskId,
      campaigns: campaignList
    };
  }

  public createCampaign(): void {
    if (this.formPublish.invalid) {
      this.isCreativeFormChecked = true;
      return;
    }
    this.isPipelineCreate = true;
    this.isCreativeFormChecked = false;
    this.metricsService.trackEvent('SHOP Publish button publish');
    // this.shopifyAuthorizationService.getShopifyAuthorization$()
    //     //   .subscribe((response: ShopifyAuthorizationResponse) => {
    //     //     if (response.shop.confirmation_url) {
    //     //       const ref = this.dialogService.open(PaymentDialogComponent, {
    //     //         data: {
    //     //           paymentUrl: this.shopifyAuthorizationService.getShopifyUserValue().confirmation_url
    //     //         },
    //     //         styleClass: 'payment-dialog',
    //     //         dismissableMask: true
    //     //       });
    //     //     } else {
    //     //       if (this.isWidgetForm) {
    //     //         this.footerService.fixCampaignWidget$$.next({
    //     //             widgetId: this.widgetCampaignId,
    //     //             campaign: this.campaignSetup()
    //     //           }
    //     //         );
    //     //         this.isWidgetForm = false;
    //     //       } else {
    //     //         this.footerService.addWidget(this.currentDraft || this.currentVideo, this.campaignSetup());
    //     //       }
    //     //     }
    //     //   });

    const pipelineParams = [
      {
        name: 'upload_video_fb',
        input: {
          adaccount_id: this.formPublish.get('formMain')
            .get('selectedAdAccount').value.id
        }
      },
      {
        name: 'create_fb_ad',
        input: this.campaignSetup()
      }
    ];
    let currentPipelineParams;
    if (this.draftView === 'video') {
      currentPipelineParams = {stages: pipelineParams};
    } else {
      const draftParams = this.currentDraft.template
        ? {
          template: this.currentDraft.template.id,
          params: this.currentDraft.params
        }
        : {
          params: {
            data: this.currentDraft.params
          }
        };
      currentPipelineParams = {
        stages: [
          {
            name: 'render_video',
            input: draftParams
          },
          ...pipelineParams
        ]
      };
    }

    this.pipelineService.create$(currentPipelineParams)
      .pipe(
        finalize(() => this.isPipelineCreate = false)
      )
      .subscribe((response) => {
        this.router.navigate(['/app/templates'], {
          queryParams: {
            tab: 'campaigns'
          }
        });
      });
  }

  public setPanelDisabled(): void {
    this
      .isMainPanelDisabled = this.formPublish.get('formCreative').invalid || this.formPublish.get('formTargeting').invalid;
    this.isTargetingPanelDisabled = this.formPublish.get('formMain').invalid || this.formPublish.get('formCreative').invalid;
    this.isCreativePanelDisabled = this.formPublish.get('formMain').invalid || this.formPublish.get('formTargeting').invalid;
  }

  public checkValidation(tabIndex: number, form): void {
    if (form.valid
    ) {
      this.setActiveTab(tabIndex);
    } else {
      this.isMainFormChecked = this.activeIndexTab === 0;
      this.isTargetingFormChecked = this.activeIndexTab === 1;
      this.isCreativeFormChecked = this.activeIndexTab === 2;
    }
  }

  // TODO: create pipe for shown error message in form children
}
