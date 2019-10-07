import { Injectable } from '@angular/core';

// TODO: (prokopenko) use provideIn: 'root' for all global services ( Angular 7 feature )
@Injectable()
export class MetricsService {

  public isImpersonated = false;

  // TODO:add dictionary with all possible events
  public waitForVendorApi(
    objectName: string, delay: number, containsField: string, registerFn: Function, attempts: number = 10
  ): void {
    if (!registerFn || attempts <= 0) {
      return;
    }

    if (!Object.prototype.hasOwnProperty.call(window, objectName) ||
      (containsField !== undefined && window[objectName][containsField] === undefined)) {
      // TODO: (prokopenko) try to rewrite using rxjs instead of setTimeout ( delay, retry  pipes )
      setTimeout(
        () => { this.waitForVendorApi(objectName, delay, containsField, registerFn, --attempts); },
        delay
      );
    } else {
      registerFn(window[objectName]);
    }
  }

  public trackEvent(eventName: string, eventOptions: object = null): void {
    if (this.isImpersonated) {
      return;
    }
    // TODO: (prokopenko) mixpanel type?
    this.waitForVendorApi('mixpanel', 500, '__loaded', (mixpanel) => {
      if (mixpanel) {
        mixpanel.track(eventName, eventOptions);
      }
    });
  }
}
