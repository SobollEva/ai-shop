export type CountryGroups = [
  'worldwide',
  'africa',
  'afta',
  'android_app_store',
  'android_free_store',
  'apec',
  'asia',
  'caribbean',
  'central_america',
  'cisfta',
  'eea',
  'emerging_markets',
  'gcc',
  'itunes_app_store',
  'nafta',
  'north_america',
  'oceania',
  'south_america'
  ];

export interface SymfonyResponse<T> {
  data: T[];
  pager?: {
    limit: number;
    before?: string;
    after?: string;
  };
}

/*
Main Form
 */
export interface FbPage {
  id: string;
  name: string;
  category?: string;
  is_published?: boolean;
  link?: string;
  perms?: null | string;
  picture?: {
    data?: {
      height: number;
      is_silhouette: boolean;
      url: string;
      width: number;
    }
  };
}

export interface AdAccount {
  account_status: number;
  amount_spent: number;
  amount_spent_sort: number;
  amount_spent_usd: number;
  attribution_spec: string[];
  brands: any[];
  business: FbPage;
  calculation_statuses: string[];
  chargable: boolean;
  created_time: string;
  currency: string;
  currency_sort: string;
  disable_reason: number;
  id: string;
  industries: any[];
  labels: string[];
  name: string;
  spend_cap: number;
  spend_cap_sort: number;
  spend_cap_usd: number;
  spend_last_30_days: number;
  spend_last_30_days_sort: number;
  spend_last_30_days_usd: number;
  spend_last_30d: number;
  spend_last_30d_sort: number;
  spend_last_30d_usd: number;
  spend_last_month: number;
  spend_last_month_sort: number;
  spend_last_month_usd: number;
  spend_last_quarter: number;
  spend_last_quarter_sort: number;
  spend_last_quarter_usd: number;
  spend_last_week: number;
  spend_last_week_mon_sun: number;
  spend_last_week_mon_sun_sort: number;
  spend_last_week_mon_sun_usd: number;
  spend_last_week_sort: number;
  spend_last_week_sun_sat: number;
  spend_last_week_sun_sat_sort: number;
  spend_last_week_sun_sat_usd: number;
  spend_last_week_usd: number;
  spend_left: number;
  spend_left_sort: number;
  spend_left_usd: number;
  spend_lifetime: number;
  spend_lifetime_sort: number;
  spend_lifetime_usd: number;
  spend_this_month: number;
  spend_this_month_sort: number;
  spend_this_month_usd: number;
  spend_this_quarter: number;
  spend_this_quarter_sort: number;
  spend_this_quarter_usd: number;
  spend_this_week: number;
  spend_this_week_mon_today: number;
  spend_this_week_mon_today_sort: number;
  spend_this_week_mon_today_usd: number;
  spend_this_week_sort: number;
  spend_this_week_sun_today: number;
  spend_this_week_sun_today_sort: number;
  spend_this_week_sun_today_usd: number;
  spend_this_week_usd: number;
  spend_today: number;
  spend_today_sort: number;
  spend_today_usd: number;
  spend_yesterday: number;
  spend_yesterday_sort: number;
  spend_yesterday_usd: number;
  timezone_name: string;
  type: string;
}

export interface IgAccount {
  asset_score: any;
  follow_count: any;
  followed_by_count: any;
  has_profile_picture: any;
  id: string;
  is_private: boolean;
  is_published: boolean;
  last_used_time: any;
  media_count: any;
  owner_business: any;
  profile_pic: string;
  username: string;
}

export interface Pixel {
  audiences: { id: string; }[];
  code: string;
  creation_time: string;
  id: string;
  last_fired_time: string;
  name: string;
  owner_ad_account: {
    id: string;
    name: string;
    attribution_spec: string[];
    spend_cap: any;
    adaccount_desc_manager: any;
  };
  owner_business: {
    id: string;
    name: string
  };
  shared_accounts: any;
  shared_agencies: any;
}

export interface ExistingAdItem {
  id: string;
  name: string;
  status?: 'PAUSED' | 'ACTIVE';
}

/*
 /Main Form
 */

export interface ErrorCreateAd {
  code: number;
  error_data: {
    blame_field_specs: any
  };
  error_subcode: number;
  error_user_msg: string;
  error_user_title: string;
  fbtrace_id: string;
  is_transient: string;
  message: string;
  type: string;
}

export interface DeliveryEstimateItem {
  bid_estimate: number[];
  daily_outcomes_curve: {
    actions: number;
    impressions: number;
    reach: number;
    spend: number;
  }[];
  estimate_dau: number;
  estimate_mau: number;
  estimate_ready: boolean;
}

export interface DeliveryEstimates {
  delivery_estimates: {
    data?: DeliveryEstimateItem[];
  }[];
}

export interface GeoLocation {
  cities?: { key?: string; radius?: number; distance_unit?: 'mile' | 'kilometer' }[];
  countries?: string[];
  country_groups?: CountryGroups;
  custom_locations?: {
    latitude?: number;
    longitude?: number;
    name?: string;
    radius?: number;
    distance_unit?: string;
    address_string?: string;
  };
  electoral_districts: { key?: string }[];
  geo_markets: { key?: string, name?: string }[];
  location_types?: ['recent', 'home', 'travel_in'];
  regions?: { key?: string }[];
  zips?: { key?: string }[];
  id?: string;
}

export interface Targeting {
  age_max: number;
  age_min: number;
  genders: number[];
  geo_locations: GeoLocation[];
  excluded_geo_locations: GeoLocation[];
  flexible_spec: object;
  exclusions: object;
}

export interface Adset {
  id?: string;
  name?: string;
  status?: string;
  promoted_object?: {
    pixel_id: string;
    custom_event_type: string;
  };
  optimization_goal?: string;
  billing_event?: string;
  daily_budget?: number;
  bid_strategy?: string;
  bid_amount?: number | null;
  start_time?: string;
  end_time?: string;
  targeting?: Targeting;
  ads: Ad[];
}

export interface Ad {
  id?: string;
  name: string;
  status: string;
  creative: {
    object_story_spec: {
      page_id: string;
      instagram_actor_id: string | null;
      video_data: {
        call_to_action: {};
        message: string;
        title: string;
        image_url: string;
        video_id: string;
      }
    };
  };
}

export interface OptionSet {
  name: string;
  value: string;
}

