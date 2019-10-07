export interface Plane {
  id: number;
  title: string;
  description: string;
  draft_limit: number;
  draft_limit_period: number;
  video_limit: number;
  video_limit_period: number;
  ad_limit: number;
  ad_limit_period: number;
  branding: boolean;
  price: number;
  basic: boolean;
  active: boolean;
}

export interface ChangePlan {
  id: number;
  plan: {
    id: number;
    title: string;
  };
  charge: number;
  created_at: string;
  accepted_at: string;
  accept: boolean;
  confirmation_url: string;
}
