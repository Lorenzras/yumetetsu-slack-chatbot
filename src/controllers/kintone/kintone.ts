import { KintoneRestAPIClient } from '@kintone/rest-api-client';

require('dotenv').config();

console.log(process.env.KINTONE_API_TOKEN_TOYOKAWA);

const clientToyokawa = new KintoneRestAPIClient({
  baseUrl: 'https://rdmuhwtt6gx7.cybozu.com',
  auth: { apiToken: process.env.KINTONE_API_TOKEN_TOYOKAWA },
});

export const getUnprocessedHankyoToyokawa = async () => {
  try {
    return (await clientToyokawa.record.getRecords({ app: '155' })).records;
  } catch (error) {
    console.log(error);
  }

  return {};
};

export default clientToyokawa;
