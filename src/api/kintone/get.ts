import {unifiedClient} from './config';


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
