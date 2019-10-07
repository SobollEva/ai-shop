import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import * as param from 'jquery-param';
import { VideoRender } from '../../shared/interfaces/shared.type';

@Injectable({
  providedIn: 'root'
})
export class VideoListService {
  private host = environment.host;
  private apiVideo = 'api/shopify/video/render';

  constructor(private http: HttpClient) { }

  public getVideoList$(page: number, limit: number): Observable<VideoRender[]> {
    return this.http.get<VideoRender[]>(`${this.host}/${this.apiVideo}/list`, {
      params: new HttpParams({fromString: param({page: page, limit: limit})})
    });
  }

  public getVideoCount$(): Observable<number> {
    return this.http.get<{ count: number }>(`${this.host}/${this.apiVideo}/count`)
      .pipe(
        map((videoCount: { count: number }) => videoCount.count)
      );
  }

  public removeVideo$(videoId: number): Observable<string> {
    return this.http.request<string>('DELETE', `${this.host}/${this.apiVideo}/${videoId}`);
  }
}
