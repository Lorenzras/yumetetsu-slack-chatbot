
import {KintoneRestAPIClient} from '@kintone/rest-api-client';


import {
  KINTONE_API_TOKEN,
  KINTONE_API_TOKEN_TOYOKAWA,
  KINTONE_API_TOKEN_TOYOHASHI,
  KINTONE_DOMAIN,
} from '../../UTIL/constants';

export const unifiedClient = new KintoneRestAPIClient({
  baseUrl: KINTONE_DOMAIN,
  auth: {apiToken: [
    KINTONE_API_TOKEN,
    KINTONE_API_TOKEN_TOYOKAWA,
    KINTONE_API_TOKEN_TOYOHASHI,
  ]},
});


export const APP_IDS = {
  hankyo: '187',
  longtermCust: '189',
};
