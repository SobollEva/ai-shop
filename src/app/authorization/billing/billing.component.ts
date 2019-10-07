import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillingService } from './billing.service';

@Component({
  selector: 'app-billing',
  template: '',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  constructor(private activateRouter: ActivatedRoute,
              private billingService: BillingService,
              private router: Router) { }

  ngOnInit() {
    this.billingService.checkBill(this.activateRouter.snapshot.queryParams.charge_id)
      .subscribe((response: string) => {
        this.router.navigate(['/app/templates']);
      });
  }
}
