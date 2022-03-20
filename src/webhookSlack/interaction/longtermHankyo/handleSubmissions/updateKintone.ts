import {kintoneClient} from '../../../../api/kintone';
import {sendModal} from '../../../../api/slack';
import {raceConditionError} from '../handleActions/blocks/';

export const updateKintone = async (
  payload: InteractionPayload,
  record: Partial<Yume.longtermCust.SavedFields>,
) => {
  const {
    view,
    'trigger_id': triggerId,
  } = payload;
  const kintoneRecord : KintoneAppRecord = JSON.parse(
    view.private_metadata);


  return kintoneClient.record.updateRecord({
    app: kintoneRecord.appId,
    id: kintoneRecord.recordId,
    revision: kintoneRecord.revision,
    record,
  })
    .catch(()=>{
      return sendModal(
        triggerId,
        raceConditionError({userId: kintoneRecord.slackUserId || ''}) );
    });
};
