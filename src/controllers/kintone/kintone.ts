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
  console.log('updating record', appId, recordId, record);
  const client = unifiedClient;

  console.log(client, 'client');
  let result;

  try {
    result = await client!.record.updateRecord({
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
  const client = unifiedClient;
  console.log(KINTONE_API_TOKEN, 'CLIENT');
  try {
    return client!.record.getRecord({
      app: appId,
      id: recordId,
    });
  } catch (error) {
    console.log(error);
  }
};


/* export const getUnprocessedHankyoToyokawa = async () => {
  try {
    return (await clientToyokawa.record.getRecords({app: '155'})).records;
  } catch (error) {
    console.log(error);
  }

  return [];
};
 */

export default {};

