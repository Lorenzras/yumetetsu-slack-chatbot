"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecord = exports.updateRecord = void 0;
const rest_api_client_1 = require("@kintone/rest-api-client");
const constants_1 = require("../../UTIL/constants");
require('dotenv').config();
/* const clientToyokawa = new KintoneRestAPIClient({
    baseUrl: KINTONE_DOMAIN,
    auth: {apiToken: KINTONE_API_TOKEN_TOYOKAWA},
}); */
/* const clientToyohashi = new KintoneRestAPIClient({
    baseUrl: KINTONE_DOMAIN,
    auth: {apiToken: KINTONE_API_TOKEN_TOYOHASHI},
});
 */
/* const resolveClientByAppId = (appId : string) => {
    switch (appId) {
        case KINTONE_HANKYO_TOYOHASHI_APP_ID:
            return clientToyohashi;
        case KINTONE_HANKYO_TOYOKAWA_APP_ID:
            return clientToyokawa;
    }
}; */
const unifiedClient = new rest_api_client_1.KintoneRestAPIClient({
    baseUrl: constants_1.KINTONE_DOMAIN,
    auth: { apiToken: [
            constants_1.KINTONE_API_TOKEN,
            constants_1.KINTONE_API_TOKEN_TOYOKAWA,
            constants_1.KINTONE_API_TOKEN_TOYOHASHI,
        ] },
});
const updateRecord = async ({ appId, recordId, record, revision }) => {
    console.log('updating record', appId, recordId, record);
    const client = unifiedClient;
    console.log(client, 'client');
    let result;
    try {
        result = await client.record.updateRecord({
            app: appId,
            id: recordId,
            record: record,
            revision,
        });
    }
    catch (error) {
        console.log(error);
    }
    return result;
};
exports.updateRecord = updateRecord;
const getRecord = ({ appId, recordId }) => {
    const client = unifiedClient;
    console.log(constants_1.KINTONE_API_TOKEN, 'CLIENT');
    try {
        return client.record.getRecord({
            app: appId,
            id: recordId,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getRecord = getRecord;
/* export const getUnprocessedHankyoToyokawa = async () => {
  try {
    return (await clientToyokawa.record.getRecords({app: '155'})).records;
  } catch (error) {
    console.log(error);
  }

  return [];
};
 */
exports.default = {};
//# sourceMappingURL=kintone.js.map