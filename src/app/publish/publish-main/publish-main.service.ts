import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AdAccount, ExistingAdItem, FbPage, IgAccount, Pixel, SymfonyResponse } from '../publish.type';

@Injectable({
  providedIn: 'root'
})
export class PublishMainService {

  constructor(private http: HttpClient) { }

  private apiUrl = `${environment.host}/api/shopify`;

  public getFbPageList$(): Observable<FbPage[]> {
    return this.http.get<FbPage[]>(`${this.apiUrl}/pages`);
  }

  public getAdAccountList$(): Observable<SymfonyResponse<AdAccount>> {
    return this.http.get<SymfonyResponse<AdAccount>>(`${this.apiUrl}/adaccounts`);
  }

  public getExistingItem$(account: AdAccount, item: AdAccount | ExistingAdItem, type: string): Observable<SymfonyResponse<ExistingAdItem>> {
    return this.http.post<SymfonyResponse<ExistingAdItem>>(`${this.apiUrl}/stats/items`,
      {
        ad_account_id: account.id, id: item.id, type: type, pager: {limit: 100},
        filtering: [{field: 'campaign.objective', operator: 'IN', value: ['CONVERSIONS']}]
      });
  }

  public getIgAccount$(adAccount: AdAccount): Observable<IgAccount[]> {
    return this.http.get<IgAccount[]>(`${this.apiUrl}/instagram/users?filters[account_id]=${adAccount.id}`);
  }

  public getPixel$(adAccount: AdAccount): Observable<Pixel[]> {
    return this.http.get<Pixel[]>(`${this.apiUrl}/adaccounts/${adAccount.id}/pixels`);
  }
}
