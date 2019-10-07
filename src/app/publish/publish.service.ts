import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, timer } from 'rxjs';
import { environment } from '../../environments/environment';
import { Campaign } from '../shared/interfaces/shared.type';
import { DeliveryEstimates, Targeting } from './publish.type';

@Injectable({
  providedIn: 'root'
})
export class PublishService {

  private host = environment.host;
  private widgetForm$$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public unsubscribeForm$$: Subject<void> = new Subject<void>();
  public unsubscribeForm$ = this.unsubscribeForm$$.asObservable();
  public widgetForm$ = this.widgetForm$$.asObservable();

  constructor(private http: HttpClient) { }

  public getWidgetForm(): { form: Campaign, widgetId: string } {
    return this.widgetForm$$.getValue();
  }

  public setWidgetForm(campaign: Campaign, widgetId: string): void {
    this.widgetForm$$.next({form: campaign, widgetId: widgetId});
  }


  public getTargetingReach$(params: any, targeting: Targeting): Observable<DeliveryEstimates> {
    return this.http.post<DeliveryEstimates>(`${this.host}/api/shopify/bulk/delivery_estimate`,
      {
        delivery_estimates: Array.of({
          targeting_spec: JSON.stringify(targeting),
          id: params.id,
          optimization_goal: params.optimization_goal,
          promoted_object: params.promoted_object
        })
      });
  }
}
