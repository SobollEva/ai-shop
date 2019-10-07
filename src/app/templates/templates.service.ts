import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {
  private switchToEditor$$: Subject<void> = new Subject<void>();

  public setSwitchToEditor(): void {
    this.switchToEditor$$.next();
  }

  public getSwitchToEditor(): Observable<void> {
    return this.switchToEditor$$.asObservable();
  }
}
