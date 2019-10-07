import {
  BulkCreateCampaign,
  Draft,
  DraftParamsType,
  TemplateParamsType,
  VideoRender
} from '../../../shared/interfaces/shared.type';

export interface Widget {
  view: Draft<DraftParamsType, TemplateParamsType> | VideoRender;
  campaign: BulkCreateCampaign;
}
