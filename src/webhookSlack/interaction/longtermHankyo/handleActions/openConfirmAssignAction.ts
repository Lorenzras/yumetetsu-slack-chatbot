
import {getRecord} from '../../../../api/kintone';
import {sendModal} from '../../../../api/slack';
import {confirmAssignAction} from './blocks/';


export const openConfirmAssignAction: SlackActionFn = async (
  actionButton, payload,
) => {
  const kintoneRecordId : KintoneAppRecord = JSON.parse(
    actionButton.value,
  );

  const kintoneResult = await getRecord(kintoneRecordId);
  const record = kintoneResult
    ?.record as unknown as Yume.longtermCust.SavedFields;

  const {$revision, custId} = record;

  /* Add revision to payload to handle race condition. */
  const privateMetaData = JSON.stringify({
    ...kintoneRecordId,
    custId: custId.value,
    revision: $revision.value,
  });

  const slackResp = sendModal(
    payload.trigger_id,
    confirmAssignAction({privateMetaData}),
  );

  return slackResp;
};
