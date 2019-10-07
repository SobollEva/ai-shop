import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { ShopifyAuthorizationService } from '../../authorization/shopify-authorization.service';
import { Gender, Ages, AgeMax, AgeMin, GeoLocationTypes } from '../publish.constants';
import { PublishService } from '../publish.service';
import { ExistingAdItem, OptionSet } from '../publish.type';

@Component({
  selector: 'app-publish-targeting',
  templateUrl: './publish-targeting.component.html',
  styleUrls: ['./publish-targeting.component.scss', '../publish.component.scss']
})
export class PublishTargetingComponent implements OnInit {
  @Input() isCheckValidation: boolean;
  constructor(private fb: FormBuilder,
              private parent: FormGroupDirective,
              private authorizationService: ShopifyAuthorizationService,
              private publishService: PublishService) { }

  public ageList: { label: string, value: string }[] = Ages
    .map((age: number) => ({label: age === AgeMax ? `${age}+` : age.toString(), value: age.toString()}));
  public genderList: OptionSet[] = Gender;
  public formTargeting: FormGroup = this.fb.group({
    targetingGeo: [{
      geo_locations: this.authorizationService.getShopifyUserValue().country
        ? {
          location_types: GeoLocationTypes,
          countries: [this.authorizationService.getShopifyUserValue().country]
        }
        : {location_types: GeoLocationTypes},
      excluded_geo_locations: {}
    }, (control: AbstractControl) => {
      if (Object.keys(control.value.geo_locations).length === 1) {
        return {notValid: true};
      }
      return null;
    }],
    targetingDetailed: [{
      flexible_spec: [{}],
      exclusions: {}
    }],
    selectedGender: ['all'],
    formAge: this.fb.group({
      selectedMinAge: [AgeMin.toString()],
      selectedMaxAge: [AgeMax.toString()]
    }, {
      validator: (control: AbstractControl) => {
        if (Number(control.value.selectedMinAge) > Number(control.value.selectedMaxAge)) {
          return {notValid: true};
        }
        return null;
      }
    })
  });

  ngOnInit() {
    this.parent.form.addControl('formTargeting', this.formTargeting);
    // set form valid if use existing adset
    this.parent.form.controls.formMain.get('adset')
      .valueChanges
      .pipe(
        filter((currentAdset: ExistingAdItem | string) => Boolean(typeof currentAdset === 'object'))
      )
      .subscribe((currentAdset: ExistingAdItem) => {
        this.formTargeting.get('targetingGeo')
          .reset({
            geo_locations: this.authorizationService.getShopifyUserValue().country
              ? {
                location_types: GeoLocationTypes,
                countries: [this.authorizationService.getShopifyUserValue().country]
              }
              : {location_types: GeoLocationTypes},
            excluded_geo_locations: {}
          });
        this.formTargeting
          .get('formAge')
          .get('selectedMinAge')
          .reset(AgeMin.toString());
        this.formTargeting
          .get('formAge')
          .get('selectedMaxAge')
          .reset(AgeMax.toString());
      });
    this.publishService.widgetForm$
      .pipe(
        filter((widget) => widget !== null)
      )
      .subscribe((widget) => {
        const widgetForm = widget.form;
        const gender = widgetForm.campaigns[0].adsets[0].targeting.genders.length
          ? widgetForm.campaigns[0].adsets[0].targeting.genders[0]
          : 'all';
        this.formTargeting.get('targetingGeo')
          .setValue({
            geo_locations: widgetForm.campaigns[0].adsets[0].targeting.geo_locations,
            excluded_geo_locations: widgetForm.campaigns[0].adsets[0].targeting.excluded_geo_locations
          });
        this.formTargeting.get('targetingDetailed')
          .setValue({
            flexible_spec: widgetForm.campaigns[0].adsets[0].targeting.flexible_spec,
            exclusions: widgetForm.campaigns[0].adsets[0].targeting.exclusions
          });
        this.formTargeting.get('selectedGender')
          .setValue(gender);
        this.formTargeting.get('formAge')
          .get('selectedMinAge')
          .setValue(widgetForm.campaigns[0].adsets[0].targeting.age_min);
        this.formTargeting.get('formAge')
          .get('selectedMaxAge')
          .setValue(widgetForm.campaigns[0].adsets[0].targeting.age_max);
      });

  }

}
