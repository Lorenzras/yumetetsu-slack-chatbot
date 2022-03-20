import {unifiedClient} from './config';
import {KintoneAppRecord} from '../../types/kintone';

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
