import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Dropdown } from 'primeng/primeng';
import { PublishMainService } from '../publish-main/publish-main.service';
import { AdAccount, ExistingAdItem, SymfonyResponse } from '../publish.type';

@Component({
  selector: 'app-choose-item',
  templateUrl: './choose-item.component.html',
  styleUrls: ['./choose-item.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ChooseItemComponent
    }
  ]
})
export class ChooseItemComponent implements ControlValueAccessor, OnInit {
  @ViewChild('input') input: ElementRef;
  @ViewChild('dropdown') dropdown: Dropdown;

  @Input() placeholder: string;
  @Input() itemType: string;
  @Input() adAccount: FormControl;
  @Input() campaign: FormControl;
  public statusItem = 'new';
  public itemList: ExistingAdItem[];
  public value: string;
  public onChange;

  public isCampaignExisting = true;

  constructor(private publishMainService: PublishMainService) {}

  ngOnInit() {
    this.adAccount.valueChanges
      .subscribe((adAccount: AdAccount) => {
        this.statusItem = 'new';
        this.onChange(this.input.nativeElement.value);
        this.dropdown.options = null;
        this.dropdown.value = null;
        if (this.itemType === 'adsets') {
          this.isCampaignExisting = false;
        }
      });

    if (this.itemType === 'adsets') {
      this.isCampaignExisting = false;
      this.campaign.valueChanges
        .subscribe((campaign) => {
          this.isCampaignExisting = Boolean(campaign && campaign.id);
          this.dropdown.options = null;
          this.statusItem = 'new';
          this.onChange(this.input.nativeElement.value);
        });
    }
  }

  writeValue(value) {
    this.value = value;
  }

  registerOnChange(fn) { this.onChange = fn; }

  registerOnTouched(fn) { }

  public getAdItemList(adAccount: AdAccount, item: AdAccount | ExistingAdItem, itemType: string): void {
    if (adAccount && this.statusItem === 'existing') {
      this.publishMainService.getExistingItem$(adAccount, item, itemType)
        .subscribe((response: SymfonyResponse<ExistingAdItem>) => {
          this.itemList = response.data;
        });
    }
  }

  public setStatusItem(status: string, value: any): void {
    this.statusItem = status;
    this.onChange(value);
    if (this.itemType === 'adcampaigns' && this.statusItem === 'new') {
      this.campaign = null;
    }
    if (this.statusItem === 'existing' && !this.dropdown.options) {
      this.campaign
        ? this.getAdItemList(this.adAccount.value, this.campaign.value, this.itemType)
        : this.getAdItemList(this.adAccount.value, this.adAccount.value, this.itemType);
    }
  }
}
