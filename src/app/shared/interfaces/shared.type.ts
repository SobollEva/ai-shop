import { Adset } from '../../publish/publish.type';

export interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
  url: string;
  images: string[];
}

// --------Publish------------
export interface VideoRender {
  id?: number;
  result?: null | string;
  created_at?: string;
  status?: 'process' | 'complete' | 'error';
  progress?: null | string;
  error?: string;
  thumbnail?: string;
  params: any;
}

export interface VideoUploadToFb {
  id: string;
  picture: string;
  status?: {
    video_status: string;
    processing_progress?: number;
  };
}

export interface BulkCreateCampaign {
  id: string;
  render_task_id?: number;
  campaigns: Campaign[];
}

// TODO(sobolevskaya): add error obj
export interface Campaign {
  id?: string | null;
  name?: string;
  objective?: string;
  status?: string;
  adsets: Adset[];
}

// ----------------------------------------------------
export type TemplateFormat = '16x9' | '1x1' | '9x16';

export type TemplateParamsType =
  SaleTemplate
  | DiscountTemplate
  | GoodsTemplate
  | ProductTemplate
  | FlipTemplate
  | DanceTemplate
  | FrontTemplate
  | SlideTemplate;

export type DraftParamsType =
  SaleDraft
  | DiscountDraft
  | GoodsDraft
  | ProductDraft
  | FlipDraft
  | DanceDraft
  | FrontDraft
  | SlideDraft;

export interface TemplateParamsColor {
  default: string;
  title: string;
  type: string;
}

export interface TemplateParamsTitle extends TemplateParamsColor {
  constraints: {
    length: {
      max: number
    };
    not_blank?: boolean;
  };
}

export interface TemplateParamsIds {
  constraints: {
    count: {
      max: number;
      min: number;
    }
  };
  entry_type: string;
  title: string;
  type: string;
}

export interface Template<PT> {
  id: number;
  description: null | string;
  name: string;
  duration: null | number;
  example: null | string;
  format: TemplateFormat;
  preview: null | string;
  template_type: {
    id: number;
    description: null | string;
    params: PT;
    title: string;
  };
  title: string;
  thumbnail_frame: number;
}

export interface TemplateGroup<PT> {
  id: number;
  title: string;
  description: null | string;
  name: string;
  templates: Template<PT>[];
}

export interface Draft<PD, PT> extends Template<PT> {
  id: number;
  created_at?: string;
  modified_at?: string;
  params?: PD;
  template?: Template<PT>;
  title: string;
}

export interface SaleParams<P, T, C> {
  size?: any;
  color_background: C;
  color_header: C;
  color_price: C;
  color_price_background: C;
  color_sale_header: C;
  color_sale_message: C;
  color_sale_percent: C;
  color_sale_title: C;
  color_shop_title: C;
  color_title: C;
  color_title_background: C;
  header: TemplateParamsTitle;
  ids: P;
  sale_header: T;
  sale_message: T;
  sale_percent: T;
  sale_title: T;
  shop_title: T;
  overlay?: {
    choices:
      {
        balls: string;
        lights: string;
        ribbon: string;
        tree: string;
      },
    default: string;
    title: string;
    type: string;
  };
}

export type  SaleTemplate = SaleParams<TemplateParamsIds, TemplateParamsTitle, TemplateParamsColor>;
export type SaleDraft = SaleParams<Product[], string, string>;

export interface DiscountParams<P, T, C> {
  size?: any;
  color_background: C;
  color_bottom_plane: C;
  color_end_background: C;
  color_flag_d: C;
  color_flag_l: C;
  color_price: C;
  color_sale_header: C;
  color_sale_message: C;
  color_shop_title: C;
  color_title: C;
  color_top_plane: C;
  ids: P;
  sale_header: T;
  sale_message: T;
  shop_title: T;
}

export type  DiscountTemplate = DiscountParams<TemplateParamsIds, TemplateParamsTitle, TemplateParamsColor>;
export type DiscountDraft = DiscountParams<Product[], string, string>;

export interface Goods<P, T, C> {
  size?: any;
  color_background: C;
  color_end_background: C;
  color_percents: C;
  color_percents_background: C;
  color_price: C;
  color_sale_header: C;
  color_sale_message: C;
  color_shop_title: C;
  color_title: C;
  ids: P;
  sale_header: T;
  sale_message: T;
  shop_title: T;
}

export type  GoodsTemplate = Goods<TemplateParamsIds, TemplateParamsTitle, TemplateParamsColor>;
export type GoodsDraft = Goods<Product[], string, string>;

export interface ProductParams<P, T, C> {
  size?: any;
  color_background: C;
  color_end_background: C;
  color_percents: C;
  color_percents_background: C;
  color_price: C;
  color_sale_header: C;
  color_sale_message: C;
  color_shop_title: C;
  color_title: C;
  ids: P;
  sale_header: T;
  sale_message: T;
  shop_title: T;
}

export type  ProductTemplate = ProductParams<TemplateParamsIds, TemplateParamsTitle, TemplateParamsColor>;
export type ProductDraft = ProductParams<Product[], string, string>;

export interface FlipParams<P, T, C> {
  size?: any;
  color_background: C;
  color_discount: C;
  color_discount_background: C;
  color_swipe: C;
  color_title: C;
  discount: T;
  ids: P;
}

export type  FlipTemplate = FlipParams<TemplateParamsIds, TemplateParamsTitle, TemplateParamsColor>;
export type FlipDraft = FlipParams<Product[], string, string>;

export interface DanceParams<P, C> {
  size?: any;
  color_price: C;
  color_price_background: C;
  color_swipe: C;
  color_title: C;
  color_title_background: C;
  ids: P;
}

export type  DanceTemplate = DanceParams<TemplateParamsIds, TemplateParamsColor>;
export type DanceDraft = DanceParams<Product[], string>;

export interface FrontParams<P, T, C> {
  size?: any;
  color_discount: C;
  color_swipe: C;
  color_title: C;
  color_title_background: C;
  discount: T;
  ids: P;
}

export type  FrontTemplate = FrontParams<TemplateParamsIds, TemplateParamsTitle, TemplateParamsColor>;
export type FrontDraft = FrontParams<Product[], string, string>;

export interface SlideParams<P, T, C> {
  size?: any;
  color_discount: C;
  color_swipe: C;
  color_title: C;
  color_title_background: C;
  discount: T;
  ids: P;
}

export type  SlideTemplate = SlideParams<TemplateParamsIds, TemplateParamsTitle, TemplateParamsColor>;
export type SlideDraft = SlideParams<Product[], string, string>;

// {
//   campaigns: [
//     {
//       budget_rebalance_flag: false
//         id: "23843409414970707"
//         name: "Video campaign"
//         objective: "CONVERSIONS"
//         status: "ACTIVE",
//     adsets:[{
//
//
//   account_id: "1598777020144240"
//   ads: [,…]
//   0
// :
//   {
//     name: "Video ad", creative
//   :
//     {
//       object_story_spec: {
//         page_id: "2095532904054736",…
//       }
//     }
//   ,
//     status: "ACTIVE"
//   }
//   creative: {
//     object_story_spec: {
//       page_id: "2095532904054736",…
//     }
//   }
//   object_story_spec: {
//     page_id: "2095532904054736",…
//   }
//   page_id: "2095532904054736"
//   video_data: {
//     call_to_action: {
//       value: {
//         link: "https://aitarget-test.myshopify.com"
//       }
//     ,
//       type: "SHOP_NOW"
//     }
//   ,…
//   }
//   call_to_action: {
//     value: {
//       link: "https://aitarget-test.myshopify.com"
//     }
//   ,
//     type: "SHOP_NOW"
//   }
//   type: "SHOP_NOW"
//   value: {
//     link: "https://aitarget-test.myshopify.com"
//   }
//   link: "https://aitarget-test.myshopify.com"
//   image_url: "https://scontent.xx.fbcdn.net/v/tt.xx&oh=84e3adc4fb8a9a8700b152854697cf9b&oe=5D2B912C"
//   video_id: "349883819218799"
//   name: "Video ad"
//   status: "ACTIVE"
//   bid_strategy: "LOWEST_COST_WITHOUT_CAP"
//   billing_event: "IMPRESSIONS"
//   campaign_id: "23843409414970707"
//   daily_budget: "20"
//   end_time: "2019-05-07T23:59:59+03:00"
//   error: {
//     message: "(#1815293) Missing field targeting in the spec", type
//   :
//     "OAuthException", code
//   :
//     1815293,…
//   }
//   code: 1815293
//   fbtrace_id: "Ep5nE07IQL7"
//   message: "(#1815293) Missing field targeting in the spec"
//   type: "OAuthException"
//   name: "Video adset"
//   optimization_goal: "OFFSITE_CONVERSIONS"
//   promoted_object: {
//     pixel_id: "219809045321284", custom_event_type
//   :
//     "CONTENT_VIEW"
//   }
//   custom_event_type: "CONTENT_VIEW"
//   pixel_id: "219809045321284"
//   start_time: "2019-04-30T23:59:59+03:00"
//   status: "ACTIVE"
//
// }]
//   id: "act_1598777020144240"
// }
