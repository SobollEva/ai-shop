import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmationService, DialogService, MessageService } from 'primeng/api';
import { Error } from 'tslint/lib/error';
import { FooterService } from '../layout/footer/footer.service';
import { ShopifyAuthorizationGuard } from './guards/shopify-authorization.guard';
import { FbAuthorizationService } from '../authorization/fb-authorization.service';
import { ShopifyAuthorizationService } from '../authorization/shopify-authorization.service';
import { FbAuthorizationGuard } from './guards/fb-authorization.guard';
import { CorsInterceptor } from './interceptors/cors.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { MetricsService } from './services/metrics.service';
import { DraftService } from './services/draft.service';
import { BulkService } from './services/bulk.service';
import { VideoRenderService } from './services/video-render.service';
import { HttpClientModule } from '@angular/common/http';

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string): void {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ShopifyAuthorizationGuard,
    ShopifyAuthorizationService,
    MetricsService,
    DialogService,
    MessageService,
    ConfirmationService,
    DraftService,
    FbAuthorizationGuard,
    FbAuthorizationService,
    FooterService,
    BulkService,
    VideoRenderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  declarations: []
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
