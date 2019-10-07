import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, DialogService } from 'primeng/api';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/Observable';
import { catchError, concatMap, distinctUntilChanged, filter, finalize, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { MetricsService } from '../../core/services/metrics.service';
import { Draft, DraftParamsType, TemplateParamsType } from '../../shared/interfaces/shared.type';
import { CustomizeService } from '../../customize/customize.service';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { DraftListService } from './draft-list.service';
import { DuplicateDialogComponent } from './duplicate-dialog/duplicate-dialog.component';
import { DraftService } from '../../core/services/draft.service';

@Component({
  selector: 'app-draft-list',
  templateUrl: './draft-list.component.html',
  styleUrls: ['./draft-list.component.scss', '../templates.component.scss']
})
export class DraftListComponent implements OnInit {
  @Output() setDraftCount: EventEmitter<number> = new EventEmitter<number>();

  public draftList: Draft<DraftParamsType, TemplateParamsType>[] = [];
  public draftPageCount = 8;
  public draftTotalCount: number;
  public searchDraftTitle: string;
  public hostEditor = environment.host_editor;
  public searchTitle: string;

  public isRealoadDraftList = true;
  public isReloadPaginator = false;

  public getDraftListInfo$ = (page, draftTitle): Observable<Draft<DraftParamsType, TemplateParamsType>[]> => {
    return this.draftListService.getDraftCount$(draftTitle)
      .pipe(
        tap((draftCount: number) => {
          this.isRealoadDraftList = true;
          this.isReloadPaginator = true;
          this.draftTotalCount = draftCount;
          this.setDraftCount.emit(this.draftTotalCount);
          if (draftCount === 0) {
            this.draftList = [];
          }
        }),
        filter((draftCount: number) => Boolean(draftCount)),
        concatMap((draftCount: number) => this.draftListService.getDraftList$(page, this.draftPageCount, draftTitle),
        ),
        tap(() => {
          this.isReloadPaginator = false;
          this.isRealoadDraftList = false;
        })
      );
  }

  constructor(private draftListService: DraftListService,
              public customizeService: CustomizeService,
              private router: Router,
              private messageService: MessageService,
              private metricsService: MetricsService,
              private dialogService: DialogService,
              private draftService: DraftService) { }

  ngOnInit() {
    this.getDraftListInfo$(1, '')
      .subscribe((response: Draft<DraftParamsType, TemplateParamsType>[]) => {
        this.draftList = response;
      });

    this.draftListService.searchDraftTitle$
      .pipe(
        tap((draftTitle: string) => this.searchDraftTitle = draftTitle),
        filter((draftTitle: string) => draftTitle !== null),
        distinctUntilChanged(),
        switchMap((draftTitle: string) => this.getDraftListInfo$(1, this.searchDraftTitle))
      )
      .subscribe((response: Draft<DraftParamsType, TemplateParamsType>[]) => {
        this.draftList = response;
      });


  }

  public removeDraft(draft: Draft<DraftParamsType, TemplateParamsType>, search: HTMLInputElement): void {
    if (search) {
      search.value = '';
    }
    const ref = this.dialogService.open(DeleteDialogComponent, {
      data: {
        title: draft.title
      },
      header: 'Delete draft'
    });

    ref.onClose
      .pipe(
        filter((isDelete: boolean) => isDelete),
        switchMap((isDelete: boolean) => this.draftService.removeDraft$(draft.id)),
        catchError(() => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error Message',
            detail: `Something was wrong. Draft ${draft.title} was not removed. Please, try again.`
          });
          return of([]);
        }),
        filter((removeStatus: string) => removeStatus === 'OK'),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success Message',
            detail: `Draft ${draft.title} was removed`
          });
        }),
        concatMap((removeStatus: string) => this.getDraftListInfo$(1, ''))
      )
      .subscribe((response: Draft<DraftParamsType, TemplateParamsType>[]) => {
        this.draftList = response;
      });

  }

  public editDraft(draft: Draft<DraftParamsType, TemplateParamsType>): void {
    if (draft.template) {
      this.router.navigate(['/app/customize'],
        {
          queryParams:
            {
              draft_id: draft.id,
              template: draft.template.name
            }
        }
      );
    } else {
      window.location.href = `${this.hostEditor}/edit/${draft.id}/${draft.params.size[0]}x${draft.params.size[1]}`;
    }
  }

  public publishDraft(draft: Draft<DraftParamsType, TemplateParamsType>): void {
    this.metricsService.trackEvent('SHOP Template button draft publish ');

    this.router.navigate(['/app/publish'],
      {
        queryParams:
          {
            template: draft.template ? draft.template.name : '',
            draft_id: draft.id,
            video_id: ''
          }
      }
    );
  }

  public duplicateDraft(draft: Draft<DraftParamsType, TemplateParamsType>, search: HTMLInputElement): void {
    if (search) {
      search.value = '';
    }
    const ref = this.dialogService.open(DuplicateDialogComponent, {
      data: {
        title: draft.title
      },
      header: 'Title`s draft'
    });

    ref.onClose
      .pipe(
        filter((newDraftTitle) => Boolean(newDraftTitle)),
        switchMap((newDraftTitle: string) =>
          draft.template
            ? this.draftService.create$(draft.template.id, newDraftTitle, draft.params, draft.params.ids)
            : this.draftService.create$(null, newDraftTitle, draft.params)),
        concatMap((response: Draft<DraftParamsType, TemplateParamsType>) => this.getDraftListInfo$(1, ''))
      )
      .subscribe((response: Draft<DraftParamsType, TemplateParamsType>[]) => {
        this.draftList = response;
      });
  }

  public searchDraftList(searchTitle: string): void {
    this.searchTitle = searchTitle;
    const searchDraftTitle = searchTitle.trim()
      .toLowerCase();
    this.draftListService.setSearchDraftTitle(searchDraftTitle);
  }

  public chooseDraftPage(currentPage: number): void {
    this.isRealoadDraftList = true;
    this.draftListService.getDraftList$(currentPage, this.draftPageCount, this.searchDraftTitle)
      .subscribe((response: Draft<DraftParamsType, TemplateParamsType>[]) => {
        this.isRealoadDraftList = false;
        this.draftList = response;
      });

  }
}
