import {KintoneRestAPIClient} from '@kintone/rest-api-client';
import type {
  HankyoApp,
  KintoneAppRecord,
} from '../../types/kintone';

import {
  KINTONE_API_TOKEN,
  KINTONE_API_TOKEN_TOYOKAWA,
  KINTONE_API_TOKEN_TOYOHASHI,
  KINTONE_DOMAIN,
} from '../../UTIL/constants';

// require('dotenv').config();

const unifiedClient = new KintoneRestAPIClient({
  baseUrl: KINTONE_DOMAIN,
  auth: {apiToken: [
    KINTONE_API_TOKEN,
    KINTONE_API_TOKEN_TOYOKAWA,
    KINTONE_API_TOKEN_TOYOHASHI,
  ]},
});


export const updateRecord = async (
  {appId, recordId, record, revision} : HankyoApp,
) => {
  let result;

  try {
    result = await unifiedClient.record.updateRecord({
      app: appId,
      id: recordId,
      record: record,
      revision,
    });
  } catch (error) {
    console.log(error);
  }

  return result;
};

export const getRecord = ({appId, recordId} : KintoneAppRecord) => {
  try {
    return unifiedClient.record.getRecord({
      app: appId,
      id: recordId,
    });
  } catch (error) {
    console.log(error);
  }
};

export default {};

