import {KintoneRestAPIClient} from '@kintone/rest-api-client';
import {kintoneAppRecord} from '../../types/kintone';

import {
    KINTONE_API_TOKEN_TOYOHASHI,
    KINTONE_API_TOKEN_TOYOKAWA,
    KINTONE_DOMAIN,
    KINTONE_HANKYO_TOYOHASHI_APP_ID,
    KINTONE_HANKYO_TOYOKAWA_APP_ID,
} from '../../UTIL/constants';

require('dotenv').config();


const clientToyokawa = new KintoneRestAPIClient({
    baseUrl: KINTONE_DOMAIN,
    auth: {apiToken: KINTONE_API_TOKEN_TOYOKAWA},
});

const clientToyohashi = new KintoneRestAPIClient({
    baseUrl: KINTONE_DOMAIN,
    auth: {apiToken: KINTONE_API_TOKEN_TOYOHASHI},
});

const resolveClientByAppId = (appId : string) => {
    switch (appId) {
        case KINTONE_HANKYO_TOYOHASHI_APP_ID:
            return clientToyohashi;
        case KINTONE_HANKYO_TOYOKAWA_APP_ID:
            return clientToyokawa;
    }
};

export const getRecord = async (
    {appId, recordId} : kintoneAppRecord,
) => {
    const client = resolveClientByAppId(appId);

    let record = null;

    try {
        record = await client!.record.getRecord({app: appId, id: recordId});
    } catch (error) {
        console.log(error);
    }

    return record;
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
