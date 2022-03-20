import {APP_IDS, kintoneClient} from '../../../../api/kintone';
import {sendModal} from '../../../../api/slack';
import {raceConditionError} from '../modal/raceConditionError';

export const stopNotify = async (payload: InteractionPayload) => {
  const kintoneRecord : KintoneAppRecord = JSON.parse(
    payload.view.private_metadata);

  const record : Partial<Yume.longtermCust.SavedFields> = {
    isNotActive: {value: '1'},
  };

  return kintoneClient.record.updateRecord({
    app: APP_IDS.longtermCust,
    id: kintoneRecord.recordId,
    revision: kintoneRecord.revision,
    record,
  }).catch(()=>{
    return sendModal(
      payload.trigger_id,
      raceConditionError({userId: kintoneRecord.slackUserId || ''}) );
  });
};
