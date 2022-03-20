import {kintoneClient} from '../../../../api/kintone';
import {getDisplayName, sendModal} from '../../../../api/slack';
import {raceConditionError} from '../modal/raceConditionError';

export const assignAction = async (payload: InteractionPayload) => {
  const {
    view,
    user,
    'trigger_id': triggerId,
  } = payload;
  const kintoneRecord : KintoneAppRecord = JSON.parse(
    view.private_metadata);

  const record : Partial<Yume.longtermCust.SavedFields> = {
    slackUserId: {value: user.id},
    slackDisplayName: {value: await getDisplayName(user.id)},
  };

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
