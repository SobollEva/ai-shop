import { GeoModule } from '@aitarget/ai-library';
import { DetailedTargetingModule } from '@aitarget/ai-library';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SharedModule } from '../shared/shared.module';
import { PreloaderDirective } from './preloader.directive';
import { PublishComponent } from './publish.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { TabViewModule } from 'primeng/tabview';
import { PublishMainComponent } from './publish-main/publish-main.component';
import { PublishTargetingComponent } from './publish-targeting/publish-targeting.component';
import { PublishCreativeComponent } from './publish-creative/publish-creative.component';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    // TODO: (prokopenko) move to router file ( follow single style agreement )
    RouterModule.forChild([
      {
        path: '',
        component: PublishComponent
      }
    ]),
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    FormsModule,
    ProgressSpinnerModule,
    DialogModule,
    MessageModule,
    TabViewModule,
    InputTextareaModule,
    GeoModule,
    DetailedTargetingModule
  ],
  declarations: [
    PublishComponent,
    PublishMainComponent,
    PublishTargetingComponent,
    PublishCreativeComponent,
    PreloaderDirective
  ],
  providers: []
})
export class PublishModule {
}
