import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MetricsService } from '../core/services/metrics.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ErrorPageComponent implements OnInit {

  constructor(private metricsService: MetricsService) { }

  ngOnInit(): void {
    this.trackEvent('SHOP init 404');
  }

  public trackEvent(event: string): void {
    window.location.href = 'https://aivideoapp.aitarget.com';
    this.metricsService.trackEvent(event);
  }
}
