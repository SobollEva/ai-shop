import { ChangeDetection } from '@angular/cli/lib/config/schema';
import { getCurrencySymbol } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  Validators,
  FormGroupDirective,
  FormBuilder,
  AbstractControl
} from '@angular/forms';
import { from, of } from 'rxjs';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { catchError, concatMap, filter, finalize, switchMap, tap } from 'rxjs/operators';
import { PublishService } from '../publish.service';
import { AdAccount, ExistingAdItem, FbPage, IgAccount, OptionSet, Pixel, SymfonyResponse } from '../publish.type';
import { PublishMainService } from './publish-main.service';
import { BidStrategies, BillingEvents, OptimizationGoals } from '../publish.constants';

@Component({
  selector: 'app-publish-main',
  templateUrl: './publish-main.component.html',
  styleUrls: ['./publish-main.component.scss', '../publish.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class PublishMainComponent implements OnInit {
  constructor(private fb: FormBuilder,
              private parent: FormGroupDirective,
              private publishMainService: PublishMainService,
              private publishService: PublishService) { }

  @Input() isCheckValidation: boolean;
  public todayDate = new Date();
  public fbPageList: FbPage[] = [];
  public adAccountList: AdAccount[] = [];
  public igAccountList: IgAccount[] = [];
  public pixelList: Pixel[] = [];
  public bidStrategyList: OptionSet[] = BidStrategies;
  public goalList: OptionSet[] = OptimizationGoals;
  public billingEventList: OptionSet[] = BillingEvents;
  public currencySymbol: string;

  public formMain: FormGroup = this.fb.group({
    campaign: ['Video campaign', [Validators.required]],
    adset: ['Video adset', [Validators.required]],
    schedule: [[new Date(), new Date(this.todayDate.setDate(this.todayDate.getDate() + 7))], (control: AbstractControl) => {
      if (control.value[0] > control.value[1]) {
        return {notValid: true};
      }
      return null;
    }],
    selectedFbPage: [null, [Validators.required]],
    selectedAdAccount: [null, [Validators.required]],
    selectedIgAccount: [{value: null, disabled: true}],
    selectedPixel: [{value: null, disabled: true}, [Validators.required]],
    dailyBudget: [20, [Validators.required, Validators.min(0), Validators.maxLength(10)]],
    optimizationGoal: [this.goalList[0].value],
    billingEvent: [this.billingEventList[0].value],
    formBid: this.fb.group({
      bidStrategy: [this.bidStrategyList[0].value],
      bidAmount: [2]
    }, {validator: this.bidValidator})
  });

  public isFbPageLoading = true;
  public isAdAccountLoading = true;
  public isIgLoading = true;
  public isPixelLoading = true;


  ngOnInit() {
    this.parent.form.addControl('formMain', this.formMain);
    this.publishMainService.getFbPageList$()
      .pipe(
        finalize(() => this.isFbPageLoading = false)
      )
      .subscribe((responseFbPage: FbPage[]) => {
        this.fbPageList = responseFbPage || [];
        this.formMain.get('selectedFbPage')
          .setValue(this.fbPageList.length ? this.fbPageList[0] : null);
      });

    this.publishMainService.getAdAccountList$()
      .pipe(
        finalize(() => this.isAdAccountLoading = false)
      )
      .subscribe((responseAdAccount: SymfonyResponse<AdAccount>) => {
        this.adAccountList = responseAdAccount.data || [];
        this.formMain.get('selectedAdAccount')
          .setValue(this.adAccountList.length ? this.adAccountList[0] : null);
      });
    /*
    set form valid if use existing adset
     */
    this.formMain.get('adset')
      .valueChanges
      .pipe(
        filter((currentAdset: ExistingAdItem | string) => Boolean(typeof currentAdset === 'object'))
      )
      .subscribe((currentAdset: ExistingAdItem) => {
        this.formMain.get('dailyBudget')
          .reset(20);
        this.formMain.get('schedule')
          .reset([new Date(), new Date(this.todayDate.setDate(this.todayDate.getDate() + 7))]);
        this.formMain.get('formBid')
          .get('bidStrategy')
          .reset(this.bidStrategyList[0].value);
      });

    this.formMain.get('selectedAdAccount')
      .valueChanges
      .pipe(
        filter((adAccount: AdAccount) => Boolean(adAccount)),
        tap(() => {
          this.isIgLoading = true;
          this.isPixelLoading = true;
          this.formMain.get('selectedIgAccount')
            .disable();
          this.formMain.get('selectedPixel')
            .disable();
        }),
        switchMap((adAccount: AdAccount) => {
          return forkJoin([this.publishMainService.getIgAccount$(adAccount), this.publishMainService.getPixel$(adAccount)]);
        }),
        tap(() => {
          this.isIgLoading = false;
          this.isPixelLoading = false;
        })
      )
      .subscribe(([IgAccountList, pixelList]: [IgAccount[], Pixel[]]) => {
          this.igAccountList = IgAccountList;
          this.pixelList = pixelList;
          this.setStatusFormControl(IgAccountList, 'selectedIgAccount');
          this.setStatusFormControl(pixelList, 'selectedPixel');
        }
      );

    this.publishService.widgetForm$
      .pipe(
        filter((widget) => widget !== null)
      )
      .subscribe((widget) => {
        const widgetForm = widget.form;
        const selectedFbPage: FbPage = this.fbPageList.filter((fbPage: FbPage) =>
          fbPage.id === widgetForm.campaigns[0].adsets[0].ads[0].creative.object_story_spec.page_id)[0];
        const selectedAdAccount: AdAccount = this.adAccountList.filter((adAccount: AdAccount) =>
          adAccount.id === widgetForm.id)[0];
        const optimizationGoal = this.goalList.filter((goal: OptionSet) =>
          goal.value === widgetForm.campaigns[0].adsets[0].optimization_goal)[0].value;
        const billingEvent = this.billingEventList.filter((billingEv: OptionSet) =>
          billingEv.value === widgetForm.campaigns[0].adsets[0].billing_event)[0].value;
        const bidStrategy = this.bidStrategyList.filter((bidStr: OptionSet) =>
          bidStr.value === widgetForm.campaigns[0].adsets[0].bid_strategy)[0].value;

        this.setFormControlValue('campaign', widgetForm.campaigns[0].name);
        this.setFormControlValue('adset', widgetForm.campaigns[0].adsets[0].name);
        this.setFormControlValue('schedule',
          [new Date(widgetForm.campaigns[0].adsets[0].start_time.split('T')[0]),
            new Date(widgetForm.campaigns[0].adsets[0].end_time.split('T')[0])]);
        this.setFormControlValue('selectedFbPage', selectedFbPage);
        this.setFormControlValue('selectedAdAccount', selectedAdAccount);
        this.setFormControlValue('dailyBudget', widgetForm.campaigns[0].adsets[0].daily_budget);
        this.setFormControlValue('optimizationGoal', optimizationGoal);
        this.setFormControlValue('billingEvent', billingEvent);
        this.setFormControlBidValue('bidStrategy', bidStrategy);
        this.setFormControlBidValue('bidAmount', widgetForm.campaigns[0].adsets[0].bid_amount);
      });

  }

  public changeCurrency(adAccountSelect: AdAccount): void {
    this.currencySymbol = getCurrencySymbol(adAccountSelect.currency, 'narrow');
  }

  public setFormControlValue(formControlName: string, value: any): void {
    this.formMain.get(formControlName)
      .setValue(value);
  }

  public setFormControlBidValue(formControlName: string, value: string): void {
    this.formMain.get('formBid')
      .get(formControlName)
      .setValue(value);
  }

  public bidValidator(group: FormGroup) {
    if (group.controls.bidStrategy.value === 'LOWEST_COST_WITH_BID_CAP' && !group.controls.bidAmount.value) {
      return {notValid: true};
    }
    return null;
  }

  public setStatusFormControl(accountList: any, formControlName: string): void {
    const formControl = this.formMain.get(formControlName);
    if (accountList) {
      formControl.setValue(accountList[0]);
      formControl.enable();
    } else {
      formControl.setValue(null);
      formControl.disable();
    }
  }
}
