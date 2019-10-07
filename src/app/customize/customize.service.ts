import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import * as param from 'jquery-param';
import {
  Draft,
  Product,
  TemplateParamsType,
  DraftParamsType, TemplateGroup
} from '../shared/interfaces/shared.type';
import { SetUpViewDraft } from './customize.type';

@Injectable({
  providedIn: 'root'
})
export class CustomizeService {
  private apiUrl = `${environment.host}/api/shopify`;
  private currentDraft$$: BehaviorSubject<Draft<DraftParamsType, TemplateParamsType>>
    = new BehaviorSubject<Draft<DraftParamsType, TemplateParamsType>>(null);
  public setupDraft$$: BehaviorSubject<SetUpViewDraft> = new BehaviorSubject<SetUpViewDraft>(null);

  // TODO: add products to setupView
  public productList: Product[] = [];
  public activeSlide = 0; // активный слайд у которого меняем продукт
  public previewSlide: Product; // превью активного слайда
  public propertyTextColor: string;
  public setupView: any = {};

  constructor(private http: HttpClient) { }

  /**
   * Amount of orders (max: 250, default: 100), Amount of products (max: 50, default: 5)
   * @param {number} amount
   * @param {number} limit
   */
  public getProductTopList$(amount: number = 100, limit: number = 5): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products/top`,
      {params: new HttpParams({fromString: param({amount: amount, limit: limit})})});
  }

  public getTemplateGroup$(groupName: string): Observable<TemplateGroup<TemplateParamsType>> {
    return this.http.get<TemplateGroup<TemplateParamsType>>(`${this.apiUrl}/video/template/list?name=${groupName}`);
  }

  public changeProduct(product: Product): void {
    this.productList[this.activeSlide] = product;
    this.previewSlide = product;
  }
}
