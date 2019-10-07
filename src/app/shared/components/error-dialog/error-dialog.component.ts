import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorDialogService } from './error-dialog.service';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {
  @Input() errorResponse: HttpErrorResponse;
  public isErrorDisplay = false;
  public isGoToLanding = true;

  constructor(private router: Router,
              private errorDialogService: ErrorDialogService) {}

  ngOnInit() {
    this.isErrorDisplay = true;
    this.isGoToLanding = typeof this.errorResponse.error === 'string'
      && this.errorResponse.error.toLowerCase()
        .includes('no hmac given or hmac is wrong');
  }

  public goHome(): void {
    this.errorDialogService.setError(null);
    this.isErrorDisplay = false;
    this.isGoToLanding
      ? this.router.navigate(['landing'])
      : this.router.navigate(['/app/templates']);
  }
}
