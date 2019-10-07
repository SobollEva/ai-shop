export type RoleName = 'ROLE_API_DOC_FACEBOOK_AITARGET' |
  'ROLE_API_DOC_SPLITMETRICS' |
  'ROLE_API_DOC_STATISTICS' |
  'ROLE_ADMIN' |
  'ROLE_USER' |
  'ROLE_SONATA_ADMIN' |
  'ROLE_FACEBOOK' |
  'ROLE_API_DOC_FACEBOOK_AITARGET' |
  'ROLE_TOKEN_CHANGER' |
  'ROLE_SUPER_ADMIN' |
  'ROLE_ADMIN' |
  'ROLE_ALLOWED_TO_SWITCH' |
  'ROLE_API_DOC_FACEBOOK_AITARGET' |
  'ROLE_TOKEN_CHANGER' |
  'ROLE_AUTOMATION_LOGS_SUPERVISOR' |
  'ROLE_BETA_TESTER' |
  'ROLE_AITARGET';


export interface ShopifyUser {
  name: string;
  title: string;
  domain: string;
  country: string;
  currency: string;
  confirmation_url: string;
  created_at: string;
  id: number;
  plan: {
    id: number;
    title: string;
  };

}

export interface FacebookUser {
  id: number;
  username: string;
  email: string;
  roles: RoleName[];
  facebook_uid: string;
  facebook_name: string;
  impersonated: boolean;
  previous_user: null;
  moderated: boolean;
}

export interface ShopifyAuthorizationResponse {
  shop: ShopifyUser;
}

export interface FbAuthorizationResponse {
  user: FacebookUser;
}
