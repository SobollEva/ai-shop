import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { CheckShopComponent } from './authorization/authorization-shop/check-shop.component';
import { LayoutModule } from './layout/layout.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BillingComponent } from './authorization/billing/billing.component';
import * as Sentry from '@sentry/browser';
import { SharedModule } from './shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
// import { ErrorsModule } from '@aitarget/ai-library';
import { GeoModule } from '@aitarget/ai-library';

if (environment.sentry_enabled) {
  Sentry.init({
    dsn: environment.sentry_dsn,
    environment: environment.sentry_environment
  });
}

@NgModule({
  declarations: [
    AppComponent,
    CheckShopComponent,
    ErrorPageComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    Angular2FontawesomeModule,
    // TODO: (prokopenko) move LayoutModule to LazyLoading modules
    LayoutModule,
    ProgressSpinnerModule,
    SharedModule,
    ButtonModule,
    DataViewModule,
    GeoModule
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
