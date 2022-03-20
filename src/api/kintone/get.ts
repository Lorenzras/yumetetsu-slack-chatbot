import {kintoneClient} from './config';


export const getRecord = ({appId, recordId} : KintoneAppRecord) => {
  try {
    return kintoneClient.record.getRecord({
      app: appId,
      id: recordId,
    });
  } catch (error) {
    console.log('GET RECORD: ', error);
  }
};
