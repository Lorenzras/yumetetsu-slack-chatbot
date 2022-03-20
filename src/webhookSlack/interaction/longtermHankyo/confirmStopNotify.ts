import {getRecord} from '../../../api/kintone';


export const confirmStopNotify: SlackActionFn = async (
  actionButton, payload,
) => {
  const kintoneRecordId : KintoneAppRecord = JSON.parse(
    actionButton.value,
  );

  const kintoneResult = await getRecord(kintoneRecordId);
  const kintoneRecord = kintoneResult?.record as unknown;
  if (!kintoneRecord) return;
};
