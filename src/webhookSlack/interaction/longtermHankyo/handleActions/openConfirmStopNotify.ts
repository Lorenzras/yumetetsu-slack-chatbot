
import {getRecord} from '../../../../api/kintone';
import {sendModal} from '../../../../api/slack';
import {confirmStopNotify} from './blocks/';


export const openConfirmStopNotify: SlackActionFn = async (
  actionButton, payload,
) => {
  const kintoneRecordId : KintoneAppRecord = JSON.parse(
    actionButton.value,
  );


  const kintoneResult = await getRecord(kintoneRecordId);
  const record = kintoneResult
    ?.record as unknown as Yume.longtermCust.SavedFields;


  const {$revision} = record;
  const privateMetaData = JSON.stringify({
    ...kintoneRecordId,
    revision: $revision.value,
  });

  const slackResp = sendModal(
    payload.trigger_id,
    confirmStopNotify({privateMetaData}),
  );


  return slackResp;
};
