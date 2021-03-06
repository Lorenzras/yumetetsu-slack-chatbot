
import {Option} from '@slack/types';

import {submitAction, raceConditionError} from './blocks/modal';
import {
  generateKintoneLink,
  getRecord,
} from '../../../api/kintone';

import saveSlackUserToKintone from './lib/saveSlackUserToKintone';
import {sendModal} from '../../../api/slack';
import updateMessageHankyo from './lib/updateMessageHankyo';
import {handleRaceCondition} from './validations/handleRaceCondition';
import {ViewSubmitAction} from '@slack/bolt';


const kintoneCheckboxToSlackOptions = (
  kintoneSelectedOptions: Array<string>,
): Option[] | undefined => {
  if (!kintoneSelectedOptions.length) return;
  const result = kintoneSelectedOptions.map<Option>((value) => {
    return {
      'text': {
        'type': 'plain_text',
        'text': value,
      },
      'value': value,
    };
  });


  return result;
};


export const openHankyoFormModal = async (payload: ViewSubmitAction) => {
  const privateMetaData = payload.view.private_metadata;
  const kintoneRecordId = JSON.parse(privateMetaData);
  const userId = payload.user.id;
  const userName = payload.user.name;

  const kintoneRecord = await getRecord(kintoneRecordId);

  const record = kintoneRecord?.record as
            unknown as Yume.hankyo.SavedFields;


  const selectedTaiouJiko = kintoneCheckboxToSlackOptions(
    record?.taiouJiko.value as Array<string>,
  );

  const bikoValue = <string>record?.biko.value;
  const mailBody = <string>record?.main.value;
  const revision = <string>record?.$revision?.value;


  if (handleRaceCondition({
    kintoneRecord: record,
    kintoneRecordId,
    triggerId: payload.trigger_id,
  }).valid) {
    const {result} = await saveSlackUserToKintone({
      userId, userName, kintoneRecordId, revision,
    });

    if ((await result)?.revision) {
      // If succesfully updated, show next modal
      await sendModal(
        payload.trigger_id,
        submitAction({
          privateMetaData,
          initialOptions: selectedTaiouJiko,
          bikoValue,
          mailBody,
          kintoneLink: generateKintoneLink({...kintoneRecordId, isEdit: true}),
        }),
      );
      updateMessageHankyo(
        record,
        kintoneRecordId,
        userId,
      );
    } else {
      // If failed, show error modal.
      console.log('error');
      sendModal(
        payload.trigger_id,
        raceConditionError(),
      );
    }
  }
};


