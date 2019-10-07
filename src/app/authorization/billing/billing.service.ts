import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private http: HttpClient) { }

  /**
   * Method for checking bill
   * @param {string} chargeId
   * @returns {Observable<any>}
   */
  public checkBill(chargeId: string): Observable<string> {
    return this.http.post<string>(`${environment.host}/api/shopify/plan/activate/${chargeId}`, null);
  }
}
