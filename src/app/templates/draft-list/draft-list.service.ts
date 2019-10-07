import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';
import * as param from 'jquery-param';
import { environment } from '../../../environments/environment';
import { Draft, DraftParamsType, TemplateParamsType } from '../../shared/interfaces/shared.type';

@Injectable({
  providedIn: 'root'
})
export class DraftListService {
  private host = environment.host;
  private apiDraft = 'api/shopify/video/draft';
  private searchDraftTitle$$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  public searchDraftTitle$ = this.searchDraftTitle$$.asObservable();

  constructor(private http: HttpClient) { }

  public setSearchDraftTitle(draftTitle: string): void {
    this.searchDraftTitle$$.next(draftTitle);
  }

  public getDraftList$(page: number, limit: number, title: string = ''): Observable<Draft<DraftParamsType, TemplateParamsType>[]> {
    return this.http.get<Draft<DraftParamsType, TemplateParamsType>[]>(`${this.host}/${this.apiDraft}/list`,
      {
        params: new HttpParams({fromString: param({page: page, limit: limit, title: title})})
      });
  }

  public getDraftCount$(title: string = ''): Observable<number> {
    return this.http.get<{ count: number }>(`${this.host}/${this.apiDraft}/count`, {
      params: new HttpParams({fromString: param({title: title})})
    })
      .pipe(
        map((draftCount: { count: number }) => draftCount.count)
      );
  }
}
