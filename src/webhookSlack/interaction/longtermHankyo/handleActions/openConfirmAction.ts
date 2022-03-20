
import {getRecord} from '../../../../api/kintone';
import {sendModal} from '../../../../api/slack';
import {confirmAction} from '../modal';


export const openConfirmAction: SlackActionFn = async (
  actionButton, payload,
) => {
  const kintoneRecordId : KintoneAppRecord = JSON.parse(
    actionButton.value,
  );

  const kintoneResult = await getRecord(kintoneRecordId);
  const record = kintoneResult
    ?.record as unknown as Yume.longtermCust.SavedFields;

  const {$revision} = record;

  /* Add revision to payload to handle race condition. */
  const privateMetaData = JSON.stringify({
    ...kintoneRecordId,
    revision: $revision.value,
  });

  const slackResp = sendModal(
    payload.trigger_id,
    confirmAction({privateMetaData}),
  );

  return slackResp;
};
