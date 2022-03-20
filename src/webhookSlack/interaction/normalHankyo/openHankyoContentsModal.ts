import {getRecord} from '../../../api/kintone/get';
import {sendModal} from '../../../api/slack';
import {contents} from './blocks/modal';


const openHankyoContentsModal = async (
  actionButton : ActionButton, payload: InteractionPayload,
) =>{
  const kintoneRecordId : KintoneAppRecord = JSON.parse(
    actionButton.value,
  );

  const kintoneRecord = (
    await getRecord(kintoneRecordId)
  )?.record as unknown as Yume.hankyo.SavedFields;

  const emailBody = kintoneRecord
    ?.main.value?.toString() ?? 'Error. Contact Lenz. ';
  const taiouJiko = kintoneRecord
    ?.taiouJiko.value.join(', ') ?? 'Error. Contact Lenz. ';
  const biko = kintoneRecord
    ?.biko.value ?? 'Error. Contact Lenz. ';
  const name = kintoneRecord
    .slackDisplayName?.value || kintoneRecord.slackUser.value;

  sendModal(
    payload.trigger_id,
    contents(
      {
        name,
        emailBody,
        taiouJiko,
        biko,
        privateMetaData: actionButton.value,
      },
    ),
  );
};

export default openHankyoContentsModal;
