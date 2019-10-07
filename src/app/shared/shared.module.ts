import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinner, ProgressSpinnerModule } from 'primeng/primeng';
import { ColorPipe } from '../customize/color.pipe';
import { PaymentDialogComponent } from './components/payment-dialog/payment-dialog.component';
import { DanceComponent } from './components/animation/dance/dance.component';
import { FlipComponent } from './components/animation/flip/flip.component';
import { FrontComponent } from './components/animation/front/front.component';
import { SlideComponent } from './components/animation/slide/slide.component';
import { EmptyViewComponent } from './components/empty-view/empty-view.component';
import { FontSizeDirective } from './directives/font-size/font-size.directive';
import { DiscountComponent } from './components/animation/discount/discount.component';
import { GoodsComponent } from './components/animation/goods/goods.component';
import { ProductComponent } from './components/animation/product/product.component';
import { SaleComponent } from './components/animation/sale/sale.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { ChooseItemComponent } from '../publish/choose-item/choose-item.component';
import { EmojiComponent } from './components/emoji/emoji.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';
import { CustomDraftComponent } from './components/custom-draft/custom-draft.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ControlComponent } from './components/control/control.component';

/**
 * https://angular.io/guide/styleguide#shared-feature-module
 * Common module из видеолекций
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    PickerModule,
    EmojiModule,
    InputTextModule,
    DialogModule,
    DataViewModule,
    DynamicDialogModule,
    ProgressSpinnerModule
  ],
  declarations: [
    FlipComponent,
    SaleComponent,
    DiscountComponent,
    ProductComponent,
    SlideComponent,
    FrontComponent,
    DanceComponent,
    GoodsComponent,
    ColorPipe,
    FontSizeDirective,
    RibbonComponent,
    ChooseItemComponent,
    EmojiComponent,
    ErrorDialogComponent,
    EmptyViewComponent,
    CustomDraftComponent,
    PaymentDialogComponent,
    EmptyViewComponent,
    ControlComponent
  ],
  exports: [
    FlipComponent,
    SaleComponent,
    DiscountComponent,
    ProductComponent,
    SlideComponent,
    FrontComponent,
    DanceComponent,
    GoodsComponent,
    ColorPipe,
    FontSizeDirective,
    RibbonComponent,
    ChooseItemComponent,
    EmojiComponent,
    EmptyViewComponent,
    CustomDraftComponent,
    ControlComponent
  ],
  entryComponents: [ErrorDialogComponent, PaymentDialogComponent, ProgressSpinner]
})
export class SharedModule {
}
