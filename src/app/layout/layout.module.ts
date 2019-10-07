import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TemplatesModule } from '../templates/templates.module';
import { TooltipModule } from 'primeng/tooltip';
import { FooterComponent } from './footer/footer.component';
import { WidgetPublishComponent } from './footer/widget-publish/widget-publish.component';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    TemplatesModule,
    TooltipModule,
    ProgressBarModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    WidgetPublishComponent
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {
}
