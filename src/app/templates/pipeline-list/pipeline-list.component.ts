import { Component, OnInit } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { concatMap, filter, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PipelineService } from '../../core/services/pipeline.service';
import { VideoUploadToFb } from '../../shared/interfaces/shared.type';

const pipelineUploadTimeout = 3000;

@Component({
  selector: 'app-pipeline-list',
  templateUrl: './pipeline-list.component.html',
  styleUrls: ['./pipeline-list.component.scss', '../templates.component.scss']
})
export class PipelineListComponent implements OnInit {
  private unsubscribe$$: Subject<void> = new Subject<void>();
  private unsubscribe$ = this.unsubscribe$$.asObservable();

  public pipelineList: any[];

  public isPipelineLoading = true;

  constructor(private pipelineService: PipelineService) { }

  ngOnInit() {
    this.pipelineService.getList$()
      .subscribe((response) => {
        this.isPipelineLoading = false;
        this.pipelineList = response;
      });
  }

  public deletePipeline(piplelineId: number) {
    this.isPipelineLoading = true;
    this.pipelineService.delete$(piplelineId)
      .pipe(
        switchMap((response: any) => this.pipelineService.getList$())
      )
      .subscribe((response) => {
        this.isPipelineLoading = false;
        this.pipelineList = response;
      });
  }

  public updatePipeline(piplelineId: number, index: number): void {
    timer(0, pipelineUploadTimeout)
      .pipe(
        takeUntil(this.unsubscribe$),
        concatMap(() => this.pipelineService.get$(piplelineId)),
        filter((pipeline: any) => pipeline.status === 'complete' || pipeline.status === 'error')
      )
      .subscribe((pipleline: any) => {
        this.unsubscribe$$.next();
        this.pipelineList[index] = pipleline;

      });
  }

  public goToAdsManager(pipleline: any): void {
    const adsUrl = ['https://business.facebook.com/adsmanager/manage/campaigns?',
      pipleline.stages[2].output.id.replace('_', '='),
      '&selected_campaign_ids=',
      pipleline.stages[2].output.campaigns[0].adsets[0].ads[0].id].join('');
    window.location.href = adsUrl;
  }
}
