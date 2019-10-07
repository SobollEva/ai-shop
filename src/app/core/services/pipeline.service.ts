import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PipelineService {
  private apiUrl = `${environment.host}/api/shopify/pipeline`;

  constructor(private http: HttpClient) { }

  public create$(params: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, params);
  }

  public getList$(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/list`);
  }

  public getCount$(): Observable<number> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/count`)
      .pipe(
        map((response: { count: number }) => response.count)
      );
  }

  public get$(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  public delete$(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
