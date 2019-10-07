import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { VideoRender } from '../../shared/interfaces/shared.type';

@Injectable({
  providedIn: 'root'
})
export class VideoRenderService {
  private URL = `${environment.host}/api/shopify/video/render`;

  constructor(private http: HttpClient) { }

  public createVideoRenderTask$(templateId: number, params: any): Observable<VideoRender> {
    return templateId
      ? this.http.post<VideoRender>(`${this.URL}/${templateId}`, params)
      : this.http.post<VideoRender>(this.URL, params);
  }

  public getVideoRenderStatus$(renderTaskId: number): Observable<VideoRender> {
    return this.http.get<VideoRender>(`${this.URL}/${renderTaskId}`);
  }
}
