import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TemplateGroup, TemplateParamsType } from '../../shared/interfaces/shared.type';

@Injectable({
  providedIn: 'root'
})
export class TemplatesChoiceService {
  private host = environment.host;

  constructor(private http: HttpClient) { }

  public getTemplateList(): Observable<TemplateGroup<TemplateParamsType>[]> {
    return this.http.get<TemplateGroup<TemplateParamsType>[]>(`${this.host}/api/shopify/video/template/list`);
  }

  public getTemplate$(id: number): Observable<any> {
      return this.http.get<any>(`${this.host}/api/shopify/video/template/${id}`);
    }
}
