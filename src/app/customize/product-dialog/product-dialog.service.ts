import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import * as param from 'jquery-param';
import { Product } from '../../shared/interfaces/shared.type';

@Injectable({
  providedIn: 'root'
})
export class ProductDialogService {
  private apiUrl = `${environment.host}/api/shopify`;

  // TODO: (prokopenko) logic of this service isn't clear. need to discuss it
  private productCount$$: BehaviorSubject<{ count: number }> = new BehaviorSubject<{ count: number }>(null);
  private productFirstPageList$$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(null);

  constructor(private http: HttpClient) { }

  public getCountProduct(): { count: number } {
    return this.productCount$$.getValue();
  }

  public setCountProduct(count: { count: number }) {
    this.productCount$$.next(count);
  }

  public getProductFirstPageList(): Product[] | null {
    return this.productFirstPageList$$.getValue();
  }

  public setProductFirstPageList(productList: Product[]) {
    this.productFirstPageList$$.next(productList);
  }

  public getProductCount$(title = ''): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/products/count`, {
      params: new HttpParams({fromString: param({title: title})})
    });
  }

  public getProductList$(page: number, limit: number, title: string = ''): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`,
      {params: new HttpParams({fromString: param({page: page, limit: limit, title: title})})});
  }
}
