
import {KintoneRestAPIClient} from '@kintone/rest-api-client';


export const unifiedClient = new KintoneRestAPIClient({
  baseUrl: process.env.KINTONE_BASE_URL,
  auth: {apiToken: [
    process.env.KINTONE_TOKEN_HANKYO,
    process.env.KINTONE_TOKEN_LTCUST,

  ]},
});


export const APP_IDS = {
  hankyo: '187',
  longtermCust: '189',
};
