import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MetricsService } from '../core/services/metrics.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  constructor(private metricsService: MetricsService,
              private activatedRoute: ActivatedRoute) { }

  public draftCount: number = 1;
  public videoCount: number = 1;
  public activeIndexTab = 0;

  ngOnInit() {
    this.metricsService.trackEvent('SHOP App visit');

    this.activatedRoute.queryParams
      .subscribe((params: Params) => {
        if (params.tab) {
          this.activeIndexTab = 2;
        }
      });
  }
}
