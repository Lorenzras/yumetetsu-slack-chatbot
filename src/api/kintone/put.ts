import {kintoneClient} from './config';


// require('dotenv').config();


export const updateRecord = async (
  {appId, recordId, record, revision} : HankyoApp,
) => {
  let result;

  try {
    result = await kintoneClient.record.updateRecord({
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


export default {};

