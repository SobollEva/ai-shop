import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublishGuard } from '../core/guards/publish.guard';
import { ShopifyAuthorizationGuard } from '../core/guards/shopify-authorization.guard';
import { FbAuthorizationGuard } from '../core/guards/fb-authorization.guard';
import { PipelineListComponent } from '../templates/pipeline-list/pipeline-list.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'app',
    canActivate: [ShopifyAuthorizationGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'templates',
      },
      {
        path: 'templates',
        loadChildren: '../templates/templates.module#TemplatesModule'
      },
      {
        path: 'publish',
        loadChildren: '../publish/publish.module#PublishModule',
        canActivate: [PublishGuard, FbAuthorizationGuard]
      },
      {
        path: 'customize',
        loadChildren: '../customize/customize.module#CustomizeModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule {
}
