import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ChangePlan, Plane } from './payment.type';

@Injectable({
  providedIn: 'root'
})
export class PaymentDialogService {

  constructor(private http: HttpClient) { }

  private apiUrl = `${environment.host}/api/shopify/plan`;

  public getPlaneList$(): Observable<Plane[]> {
    return this.http.get<Plane[]>(`${this.apiUrl}/list`);
  }

  public setPlane$(planeid: number): Observable<ChangePlan> {
    return this.http.post<ChangePlan>(`${this.apiUrl}/change/${planeid}`, null);
  }
}
