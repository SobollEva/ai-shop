import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BulkCreateCampaign, Campaign, VideoUploadToFb } from '../../shared/interfaces/shared.type';

@Injectable({
  providedIn: 'root'
})
export class BulkService {

  private host = environment.host;
  private urlUpload = `${environment.host}/api/shopify/video/upload`;

  constructor(private http: HttpClient) { }

  public saveVideoToFb$(adAccountId: string, videoUrl: string): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(this.urlUpload,
      {adaccount_id: adAccountId, file_url: videoUrl});
  }

  public getUploadVideoFromFb$(videoId: string): Observable<VideoUploadToFb> {
    return this.http.get<VideoUploadToFb>(`${this.urlUpload}/${videoId}`);
  }

  public createCampaign$(campaignData: Campaign): Observable<BulkCreateCampaign> {
    return this.http.post<BulkCreateCampaign>(`${this.host}/api/shopify/bulk/create`, campaignData);
  }

}
