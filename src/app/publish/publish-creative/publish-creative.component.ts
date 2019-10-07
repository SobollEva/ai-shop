import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { ShopifyAuthorizationService } from '../../authorization/shopify-authorization.service';
import { Draft, DraftParamsType, Product, TemplateParamsType } from '../../shared/interfaces/shared.type';
import { PublishMainService } from '../publish-main/publish-main.service';
import { PixelEvents } from '../publish.constants';
import { PublishService } from '../publish.service';
import { ExistingAdItem } from '../publish.type';

function unique(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    obj[str] = true;
  }
  return Object.keys(obj);
}

@Component({
  selector: 'app-publish-creative',
  templateUrl: './publish-creative.component.html',
  styleUrls: ['./publish-creative.component.scss', '../publish.component.scss']
})
export class PublishCreativeComponent implements OnInit {
  @Input()
  public draft: Draft<DraftParamsType, TemplateParamsType>;
  @Input() isCheckValidation: boolean;
  public defaultUrlList: { url: string }[] = Array
    .of({url: `https://${this.authorizationService.getShopifyUserValue().domain}`});
  public urlList: { url: string }[] = [];
  public pixelEventsList = PixelEvents;
  public formCreative: FormGroup = this.fb.group({
    adName: ['Video ad', [Validators.required, Validators.minLength(3)]],
    url: [this.defaultUrlList[0]],
    pixelEvent: [this.pixelEventsList[0]],
    headline: [null, [Validators.maxLength(40)]],
    text: [null]
  });

  public isUseExistingAdset = false;

  constructor(private fb: FormBuilder,
              private parent: FormGroupDirective,
              private publishMainService: PublishMainService,
              private authorizationService: ShopifyAuthorizationService,
              private publishService: PublishService) { }

  ngOnInit() {
    this.parent.form.addControl('formCreative', this.formCreative);
    if (this.draft && this.draft.id) {
      this.urlList = this.defaultUrlList
        .concat(
          unique(this.draft
            .params
            .ids
            .map((product: Product) => product.url))
            .map((url: string) => ({url: url}))
        );
    } else {
      this.urlList = this.defaultUrlList;
    }

    this.parent.form.controls.formMain.get('adset')
      .valueChanges
      .pipe(
        filter((currentAdset: ExistingAdItem | string) => Boolean(typeof currentAdset === 'object'))
      )
      .subscribe((currentAdset: ExistingAdItem) => {
        this.isUseExistingAdset = true;
      });

    this.publishService.widgetForm$
      .pipe(
        filter((widget) => widget !== null)
      )
      .subscribe((widget) => {
        const widgetForm = widget.form;
        const pixelEvent = this.pixelEventsList.filter((event: { name: string, value: string }) =>
          event.value === widgetForm.campaigns[0].adsets[0].promoted_object.custom_event_type)[0];
        const urlCta = this.urlList.filter((url: { url: string }) =>
          url.url === widgetForm.campaigns[0].adsets[0].ads[0].creative.object_story_spec.video_data.call_to_action.value.link)[0];
        this.formCreative.get('adName')
          .setValue(widgetForm.campaigns[0].adsets[0].ads[0].name);
        this.formCreative.get('url')
          .setValue(urlCta);
        this.formCreative.get('pixelEvent')
          .setValue(pixelEvent);
        this.formCreative.get('headline')
          .setValue(widgetForm.campaigns[0].adsets[0].ads[0].creative.object_story_spec.video_data.title);
        this.formCreative.get('text')
          .setValue(widgetForm.campaigns[0].adsets[0].ads[0].creative.object_story_spec.video_data.message);
      });
  }
}
