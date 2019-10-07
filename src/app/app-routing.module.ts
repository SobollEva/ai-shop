import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckShopComponent } from './authorization/authorization-shop/check-shop.component';
import { BillingComponent } from './authorization/billing/billing.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: 'activate',
    component: BillingComponent
  },
  {
    path: 'check',
    component: CheckShopComponent
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'

  },
  // TODO: choose error page
  // {
  //   path: '**',
  //   redirectTo: '404'
  // },
  // {
  //   path: '404',
  //   component: ErrorPageComponent
  // }
  // {path: 'error', component: ErrorsComponent},
  // {path: '**', component: ErrorsComponent, data: {error: '404'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  }), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
