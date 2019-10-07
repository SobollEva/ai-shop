import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ColorPickerModule } from 'primeng/primeng';
import { SharedModule } from '../shared/shared.module';
import { CustomizeComponent } from './customize.component';
import { HighlightPipe } from './product-dialog/highlight.pipe';
import { FontColorDirective } from './font-color.directive';
import { DanceSlidesComponent } from './slides/dance-slides/dance-slides.component';
import { FlipSlidesComponent } from './slides/flip-slides/flip-slides.component';
import { FrontSlidesComponent } from './slides/front-slides/front-slides.component';
import { SaleSlidesComponent } from './slides/sale-slides/sale-slides.component';
import { DiscountSlidesComponent } from './slides/discount-slides/discount-slides.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { ProductSlidesComponent } from './slides/product-slides/product-slides.component';
import { PreviewPipe } from './preview.pipe';
import { PaginatorModule } from 'primeng/paginator';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { GoodsSlidesComponent } from './slides/goods-slides/goods-slides.component';
import { SlideSlidesComponent } from './slides/slide-slides/slide-slides.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: CustomizeComponent
    }]),
    FormsModule,
    ButtonModule,
    ColorPickerModule,
    ProgressSpinnerModule,
    DialogModule,
    TooltipModule,
    CarouselModule,
    DataViewModule,
    PaginatorModule
  ],
  declarations: [
    CustomizeComponent,
    SaleSlidesComponent,
    HighlightPipe,
    FontColorDirective,
    DiscountSlidesComponent,
    SlideSlidesComponent,
    DanceSlidesComponent,
    FlipSlidesComponent,
    FrontSlidesComponent,
    ProductSlidesComponent,
    PreviewPipe,
    ProductDialogComponent,
    GoodsSlidesComponent
  ],
  exports: [CustomizeComponent],
  entryComponents: [ProductDialogComponent]
})
export class CustomizeModule {
}
