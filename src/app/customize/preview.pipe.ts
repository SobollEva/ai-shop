import { Pipe, PipeTransform } from '@angular/core';
import { CustomizeService } from './customize.service';

@Pipe({
  name: 'preview'
})
export class PreviewPipe implements PipeTransform {
  constructor(private customizeService: CustomizeService) {}

  transform(value: any, args?: any): any {
    return {params: {...this.customizeService.setupView, ids: this.customizeService.productList}};
  }

}
