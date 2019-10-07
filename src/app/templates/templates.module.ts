import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { CarouselModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/tabview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SharedModule } from '../shared/shared.module';
import { TemplatesComponent } from './templates.component';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TemplatesChoiceComponent } from './templates-choice/templates-choice.component';
import { VideoListComponent } from './video-list/video-list.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DraftListComponent } from './draft-list/draft-list.component';
import { PaginatorModule } from 'primeng/paginator';
import { DuplicateDialogComponent } from './draft-list/duplicate-dialog/duplicate-dialog.component';
import { DeleteDialogComponent } from './draft-list/delete-dialog/delete-dialog.component';
import { TemplatesDemoDialogComponent } from './templates-choice/templates-demo-dialog/templates-demo-dialog.component';
import { VideoDeleteDialogComponent } from './video-list/video-delete-dialog/video-delete-dialog.component';
import { TooltipModule } from 'primeng/tooltip';
import { OverlayModule } from '@angular/cdk/overlay';
import { PipelineListComponent } from './pipeline-list/pipeline-list.component';
import { MessagePipe } from './pipeline-list/message.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TemplatesComponent
      }
    ]),
    ButtonModule,
    DataViewModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    ProgressSpinnerModule,
    TabViewModule,
    OverlayPanelModule,
    PaginatorModule,
    TooltipModule,
    OverlayModule,
    CarouselModule
  ],
  declarations: [
    TemplatesComponent,
    TemplatesChoiceComponent,
    VideoListComponent,
    VideoDeleteDialogComponent,
    DraftListComponent,
    DuplicateDialogComponent,
    DeleteDialogComponent,
    TemplatesDemoDialogComponent,
    PipelineListComponent,
    MessagePipe
  ],
  entryComponents: [
    DuplicateDialogComponent,
    DeleteDialogComponent,
    TemplatesDemoDialogComponent,
    VideoDeleteDialogComponent
  ]
})
export class TemplatesModule {
}

// TODO: modules not available from shareModule
