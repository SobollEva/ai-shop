import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { EditorDraftParams } from '../../shared/interfaces/draft.type';
import { Draft, DraftParamsType, Product, TemplateParamsType } from '../../shared/interfaces/shared.type';
import * as param from 'jquery-param';

@Injectable({
  providedIn: 'root'
})
export class DraftService {

  private URL = `${environment.host}/api/shopify/video/draft`;

  constructor(private http: HttpClient) { }

  public get$(draftId: number): Observable<Draft<DraftParamsType, TemplateParamsType>> {
    return this.http.get<Draft<DraftParamsType, TemplateParamsType>>(`${this.URL}/${draftId}`);
  }

  public create$(templateId: number | null, templateTitle: string,
                 params: DraftParamsType | EditorDraftParams,
                 productList?: Product[]): Observable<Draft<DraftParamsType, TemplateParamsType> | any> {
    const draftParams = {...params, ids: productList};
    return templateId
      ? this.http.post<Draft<DraftParamsType, TemplateParamsType>>(`${this.URL}/${templateId}`,
        {
          title: templateTitle,
          params: draftParams
        })
      : this.http.post<Draft<any, any>>(`${this.URL}`,
        {
          title: templateTitle,
          params: params
        });

  }

  public edit$(draftId: number, draftTitle: string,
               params: DraftParamsType, productList: Product[]): Observable<Draft<DraftParamsType, TemplateParamsType>> {
    const draftParams = {...params, ids: productList};
    return this.http.patch<Draft<DraftParamsType, TemplateParamsType>>(`${this.URL}/${draftId}`,
      {
        title: draftTitle,
        params: draftParams
      });
  }

  public removeDraft$(draftId: number): Observable<string> {
    return this.http
      .delete<string>(`${this.URL}/${draftId}`);
  }
}
