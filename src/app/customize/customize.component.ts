import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { concatMap, tap } from 'rxjs/operators';
import { MetricsService } from '../core/services/metrics.service';
import {
  Draft,
  DraftParamsType,
  Product,
  Template,
  TemplateGroup,
  TemplateParamsType
} from '../shared/interfaces/shared.type';
import { DraftService } from '../core/services/draft.service';
import { CustomizeService } from './customize.service';
import { MenuItem } from 'primeng/api';
import { bgColorList, fontColorList } from './customize.colors';
import { draftFormat, defaultFormatList } from './customize.format';
import { overlayMap } from './customize.overlay';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';

const defaultView = 'sale';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss'],
})
export class CustomizeComponent implements OnInit {
  private templateId: number;
  private currentDraft: Draft<DraftParamsType, TemplateParamsType>;

  public draftView = defaultView;
  public draftAction: string;
  public productTopList: Product[] = [];
  public bgColorPickerPropertyList: string[] = Object.keys(bgColorList[defaultView][0]);
  public templateTitle: string;
  public templateFormatList: Array<{ format: string, templateId: number }> = defaultFormatList;
  public routeSaveDraft: string;
  public bgColorList: any = bgColorList[defaultView];
  public fontColorList = fontColorList;
  public overlayList: string[] = [];
  public currentFormat: string;
  public draftFormat = draftFormat;
  public draftWidth: number;
  public draftHeight: number;
  public previewDraft: Draft<DraftParamsType, TemplateParamsType>;
  public previewFormat: string;
  public productDialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ProductDialogComponent);

  public colorPickerBg1 = '#1c1b21';
  public colorPickerBg2 = '#1c1b21';
  public colorPickerBg3 = '#1c1b21';
  public colorPickerBg4 = '#1c1b21';
  public colorPickerFont = '#1c1b21';


  public isSaveDraftDisplay = false;
  public isDraftLoading = true;
  public isLastSlide = false;
  public isDraftExist = true;
  public isOverlayDisplay = false;
  public isOverlayExist = false;
  public isPreviewDraftDisplay = false;
  public isChangeTemplateColor = true;

  public activeBgColor: number;
  public activeFontColor: number;
  public activeFormat: number;
  // TODO: rewritte for all templates
  public activeOverlay: string = 'balls';

  constructor(public customizeService: CustomizeService,
              private router: Router,
              private metricsService: MetricsService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private view: ViewContainerRef,
              private activatedRoute: ActivatedRoute,
              private draftService: DraftService) { }

  ngOnInit() {
    const queryParams: Params = this.activatedRoute.snapshot.queryParams;
    this.isDraftExist = Boolean(queryParams.draft_id
      || (queryParams.template && queryParams.product_count));
    if (this.isDraftExist) {
      this.customizeService.getProductTopList$()
        .pipe(
          tap(() => this.isDraftLoading = true),
          concatMap((responseProduct: Product[]) => {
            this.productTopList = responseProduct;
            return queryParams.draft_id
              ? this.draftService.get$(Number(queryParams.draft_id))
              : this.customizeService.getTemplateGroup$(queryParams.template);
          }),
          tap(() => this.isDraftLoading = false),
        )
        .subscribe((response: Draft<DraftParamsType, TemplateParamsType> | TemplateGroup<TemplateParamsType>) => {
          this.draftView = ('template' in response) ? response.template.name : queryParams.template;
          this.customizeService.setupView = {};
          if ('params' in response) {
            // TODO: delete this var
            this.draftAction = 'edit';
            this.currentDraft = response;
            this.templateFormatList = Array.of({format: response.template.format, templateId: response.template.id});
            Object.keys(response.params)
              .forEach((prop: string) => {
                this.customizeService.setupView[prop] = response.params[prop];
              });
            this.templateTitle = response.title;
            // TODO: set setupView.ids
            this.customizeService.productList = response.params.ids;
            this.isOverlayExist = response
              .params
              .hasOwnProperty('overlay');
          } else {
            this.draftAction = 'create';
            const currentTemplateList = response[0].templates
              .filter((template: Template<TemplateParamsType>) =>
                Number(queryParams.product_count) === template.template_type.params.ids.constraints.count.max);
            this.templateFormatList = currentTemplateList
              .map((template: Template<TemplateParamsType>) =>
                ({
                  format: template.format,
                  templateId: template.id
                }));
            const defaultTemplate = currentTemplateList[0];
            this.draftView = defaultTemplate.name;
            Object.keys(defaultTemplate.template_type.params)
              .forEach((prop: string) =>
                this.customizeService.setupView[prop] = defaultTemplate.template_type.params[prop].default);
            this.templateTitle = defaultTemplate.title;
            this.templateId = defaultTemplate.id;
            this.customizeService.productList = this.productTopList.slice(0, queryParams.product_count);
            this.isOverlayExist = defaultTemplate
              .template_type
              .params
              .hasOwnProperty('overlay');
          }

          this.setDraftFormat(this.templateFormatList[0], 0);
          this.bgColorPickerPropertyList = Object.keys(bgColorList[this.draftView][0]);
          this.bgColorList = bgColorList[this.draftView];
          this.overlayList = overlayMap[this.draftView];
          this.activeOverlay = this.overlayList && this.overlayList.length
            ? this.overlayList[0]
            : 'balls';
          // TODO: вынести правила в отдельный список
          if (this.draftView === 'product') {
            this.isChangeTemplateColor = Boolean(this.customizeService.setupView.color_end_background);
          }
          this.customizeService.previewSlide = this.productTopList[0];
          this.metricsService.trackEvent(
            `SHOP Template ${this.draftView === 'product'
            && !this.customizeService.setupView.color_end_background
              ? `ST VALENTINE PRODUCT success ${this.draftAction}`
              : this.draftView.toUpperCase()} success ${this.draftAction}`,
            {
              product_count: Number(queryParams.product_count)
            });
        });
    }
  }

  public openProductDialog(): void {
    this.view.createComponent(this.productDialogComponentFactory);
  }

  // TODO: rewrite
  public changeBgColor(newColor: { col1?: string, col2?: string, col3?: string, col4?: string }, index: number): void {
    switch (this.draftView) {
      case 'sale': {
        this.customizeService.setupView.color_title_background =
          newColor.col1 || this.customizeService.setupView.color_title_background;
        this.customizeService.setupView.color_price_background =
          newColor.col2 || this.customizeService.setupView.color_price_background;
      }
        break;
      case 'discount': {
        this.customizeService.setupView.color_bottom_plane =
          newColor.col1 || this.customizeService.setupView.color_bottom_plane;
        this.customizeService.setupView.color_end_background =
          newColor.col2 || this.customizeService.setupView.color_end_background;
      }
        break;
      case 'product': {
        this.customizeService.setupView.color_end_background =
          newColor.col1 || this.customizeService.setupView.color_end_background;
        this.customizeService.setupView.color_percents_background =
          newColor.col2 || this.customizeService.setupView.color_percents_background;
        this.customizeService.setupView.color_percents =
          newColor.col3 || this.customizeService.setupView.color_percents;
      }
        break;
      case 'slide': {
        this.customizeService.setupView.color_background =
          newColor.col1 || this.customizeService.setupView.color_background;
      }
        break;
      case 'front': {
        this.customizeService.setupView.color_title_background =
          newColor.col1 || this.customizeService.setupView.color_title_background;
      }
        break;
      case 'dance': {
        this.customizeService.setupView.color_title_background =
          newColor.col1 || this.customizeService.setupView.color_title_background;
        this.customizeService.setupView.color_price_background =
          newColor.col2 || this.customizeService.setupView.color_price_background;
      }
        break;
      case 'flip': {
        this.customizeService.setupView.color_background =
          newColor.col1 || this.customizeService.setupView.color_background;
        this.customizeService.setupView.color_discount_background =
          newColor.col2 || this.customizeService.setupView.color_discount_background;
      }
        break;
      case 'goods': {
        this.customizeService.setupView.color_background_c =
          newColor.col1 || this.customizeService.setupView.color_background_c;
        this.customizeService.setupView.color_background_d =
          newColor.col2 || this.customizeService.setupView.color_background_d;
        this.customizeService.setupView.color_background_f =
          newColor.col3 || this.customizeService.setupView.color_background_f;
      }
        break;
    }
    this.activeBgColor = index;
  }


  public changeTextColor(newColor: string, index: number): void {
    this.customizeService.setupView[this.customizeService.propertyTextColor] = newColor;
    this.activeFontColor = index;
  }

  saveDraft(draftTitle: string): void {
    const saveDraftUrl$: Observable<Draft<DraftParamsType, TemplateParamsType>> =
      this.currentDraft
        ? this.draftService.edit$(this.currentDraft.id, draftTitle, this.customizeService.setupView, this.customizeService.productList)
        : this.draftService.create$(this.templateId, draftTitle, this.customizeService.setupView, this.customizeService.productList);

    saveDraftUrl$
      .subscribe((response: Draft<DraftParamsType, TemplateParamsType>) => {
        if (this.routeSaveDraft === 'publish') {
          this.metricsService.trackEvent('SHOP Customize button publish');
          this.router.navigate(['/app/publish'],
            {
              queryParams:
                {
                  draft_id: response.id,
                  video_id: ''
                }
            });
        } else {
          this.router.navigate(['/app/templates']);
        }
      });
    this.metricsService.trackEvent(
      `SHOP Customize Visit ${this.draftAction}`
    );
  }

  public openSaveDraftDisplay(route: string): void {
    this.isSaveDraftDisplay = true;
    this.routeSaveDraft = route;
  }

  // TODO: rewrite getting this.activeFormat
  public setDraftFormat(templateFormat: { format: string, templateId: number }, index: number): void {
    this.previewFormat = templateFormat.format;
    this.draftWidth = this.draftFormat[templateFormat.format].width;
    this.draftHeight = this.draftFormat[templateFormat.format].height;
    this.currentFormat = this.draftFormat[templateFormat.format].class;
    this.templateId = templateFormat.templateId;
    this.activeFormat = index;
  }

  public addOverlay(overlay: string): void {
    this.isOverlayDisplay = false;
    this.customizeService.setupView.overlay = this.activeOverlay = overlay;
  }
}
