

import {getRecord} from '../../../api/kintone/get';
import {sendModal} from '../../../api/slack';

import {initialConfirmation} from './blocks/modal';
import {handleRaceCondition} from './validations/handleRaceCondition';


const openHankyoTaiouModal = async (
  actionButton : ActionButton, payload: InteractionPayload,
) => {
  const kintoneRecordId : KintoneAppRecord = JSON.parse(
    actionButton.value,
  );

  const kintoneRecord = (
    await getRecord(kintoneRecordId)
  )?.record as KintoneHankyoRecord;


  if (kintoneRecord &&
    handleRaceCondition( {
      kintoneRecord,
      kintoneRecordId,
      triggerId: payload.trigger_id} ).valid) {
    const emailBody = kintoneRecord.main?.value.toString() ||
    '問題が発生しました。@レンズを連絡してください。';

    sendModal(
      payload.trigger_id,
      initialConfirmation(
        {
          name: payload.user.name,
          emailBody: emailBody,
          privateMetaData: actionButton.value,
        },
      ),
    );

    // todo optimize using async await
    // console.log(await viewsOpen);
  }
};

export default openHankyoTaiouModal;
