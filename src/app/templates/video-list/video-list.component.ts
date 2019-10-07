import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, MessageService } from 'primeng/api';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/Observable';
import { catchError, concatMap, filter, finalize, switchMap, tap } from 'rxjs/operators';
import { MetricsService } from '../../core/services/metrics.service';
import { VideoRenderService } from '../../core/services/video-render.service';
import { VideoRender } from '../../shared/interfaces/shared.type';
import { CustomizeService } from '../../customize/customize.service';
import { VideoDeleteDialogComponent } from './video-delete-dialog/video-delete-dialog.component';
import { VideoListService } from './video-list.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss', '../templates.component.scss']
})
export class VideoListComponent implements OnInit {
  @Output() setVideoCount: EventEmitter<number> = new EventEmitter<number>();

  public videoList: VideoRender[] = [];
  public videoRow = 8;
  public videoTotalCount: number;

  public isRealoadVideotList = true;

  public getVideoListInfo$ = (page): Observable<VideoRender[]> => {
    return this.videoListService.getVideoCount$()
      .pipe(
        tap((videoCount: number) => {
          this.videoTotalCount = videoCount;
          this.isRealoadVideotList = true;
          this.setVideoCount.emit(this.videoTotalCount);
          if (videoCount === 0) {
            this.videoList = [];
          }
        }),
        finalize(() => this.isRealoadVideotList = false),
        filter((videoCount: number) => Boolean(videoCount)),
        concatMap((videoCount: number) => this.videoListService.getVideoList$(page, this.videoRow)
        )
      );
  }

  constructor(public videoListService: VideoListService,
              private messageService: MessageService,
              private customizeService: CustomizeService,
              private router: Router,
              private metricsService: MetricsService,
              private dialogService: DialogService,
              private videoRenderService: VideoRenderService) { }

  ngOnInit() {
    this.getVideoListInfo$(1)
      .subscribe((videoList: VideoRender[]) => {
        this.videoList = videoList;
      });
  }

  public removeVideo(video: VideoRender): void {
    const ref = this.dialogService.open(VideoDeleteDialogComponent, {
      header: 'Delete video'
    });

    ref.onClose
      .pipe(
        filter((isDelete) => Boolean(isDelete)),
        switchMap((isDelete: boolean) => this.videoListService.removeVideo$(video.id)),
        catchError(() => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error Message',
            detail: `Something was wrong. Video was not removed. Please, try again.`
          });
          return of([]);
        }),
        filter((removeStatus: string) => removeStatus === 'OK'),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success Message',
            detail: `Video was removed`
          });
        }),
        concatMap((removeStatus: string) => this.getVideoListInfo$(1))
      )
      .subscribe((response: VideoRender[]) => {
        this.videoList = response;
      });
  }

  public downloadVideo(videoUrl: string): string {
    return videoUrl
      ? `https://rv.aitarget.com${videoUrl.split('amazonaws.com')[1]}`
      : '#';
  }

  public publishVideo(video: VideoRender): void {
    this.metricsService.trackEvent('SHOP Template button video publish ');
    this.router.navigate(['/app/publish'],
      {
        queryParams:
          {
            draft_id: '',
            video_id: video.id
          }
      }
    );
  }

  public refreshVideo(videoId: number, index: number): void {
    this.videoRenderService.getVideoRenderStatus$(videoId)
      .subscribe((renderVideoStatus: VideoRender) => {
        this.videoList[index] = renderVideoStatus;
      });
  }

  public chooseVideoPage(currentPage: number): void {
    this.videoListService.getVideoList$(currentPage, this.videoRow)
      .subscribe((response: VideoRender[]) => {
        this.videoList = response;
      });

  }

  public clickDownloadVideo(): void {
    this.metricsService.trackEvent('SHOP Templates video download');
  }
}
