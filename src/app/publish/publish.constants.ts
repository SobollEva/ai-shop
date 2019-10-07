// TODO: (prokopenko) types for all constants
export const Gender = [
  {value: '1', name: 'Male'},
  {value: '2', name: 'Female'},
  {value: 'all', name: 'All'}
];

export const Ages = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
  33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
  55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65];

export const AgeMin = 18;

export const AgeMax = 65;

export const GeoLocationTypes = ['home', 'recent'];

export const BillingEvents = [
  {name: 'Impressions', value: 'IMPRESSIONS'},
  {name: 'Link Clicks', value: 'LINK_CLICKS'}
];

export const OptimizationGoals = [
  {name: 'Conversions', value: 'OFFSITE_CONVERSIONS'},
  {name: 'Landing Page Views', value: 'LANDING_PAGE_VIEWS'},
  {name: 'Link Clicks', value: 'LINK_CLICKS'},
  {name: 'Impressions', value: 'IMPRESSIONS'},
  {name: 'Daily Unique Reach', value: 'REACH'}
];

export const BidStrategies = [
  {name: 'Lowest cost without cap', value: 'LOWEST_COST_WITHOUT_CAP'},
  {name: 'Lowest cost with cap', value: 'LOWEST_COST_WITH_BID_CAP'}
];

export const PixelEvents = [
  {
    name: 'View Content',
    value: 'CONTENT_VIEW'
  },
  {
    name: 'Search',
    value: 'SEARCH'
  },
  {
    name: 'Add to cart',
    value: 'ADD_TO_CART'
  },
  {
    name: 'Add to wishlist',
    value: 'ADD_TO_WISHLIST'
  },
  {
    name: 'Initiate checkout',
    value: 'INITIATED_CHECKOUT'
  },
  {
    name: 'Add payment info',
    value: 'ADD_PAYMENT_INFO'
  },
  {
    name: 'Purchase',
    value: 'PURCHASE'
  },
  {
    name: 'Lead',
    value: 'LEAD'
  },
  {
    name: 'Complete registration',
    value: 'COMPLETE_REGISTRATION'
  }
];
