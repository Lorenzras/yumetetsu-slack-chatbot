
import {Option} from '@slack/types';
import {
    KintoneHankyoTaiouRecord,
} from '../../../../types/kintone';

import {InteractionPayload} from '../../../../types/slack';
import hankyoTaiouRaceCondition
    from '../../../../view/slack/modals/hankyoTaiouRaceCondition';

import hankyouTaiouSend
    from '../../../../view/slack/modals/hankyouTaiouSend';
import {generateKintoneLink} from '../../../kintone/helpers';
import {getRecord} from '../../../kintone/kintone';
import saveSlackUserToKintone from '../../../kintone/saveSlackUserToKintone';
import sendModal from '../../api/sendModal';
import updateMessageHankyo from '../../api/updateMessageHankyo';
import raceConditionHandler from '../../validations/raceConditionHandler';


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


const openHankyoTaiouActionModal = async (payload: InteractionPayload) => {
    try {
        const privateMetaData = payload.view.private_metadata;
        const kintoneRecordId = JSON.parse(privateMetaData);
        const userId = payload.user.id;
        const userName = payload.user.username;

        const kintoneRecord = await getRecord(kintoneRecordId);

        const record = kintoneRecord?.record as
            unknown as KintoneHankyoTaiouRecord;

        console.log(record, 'test');
        const selectedTaiouJiko = kintoneCheckboxToSlackOptions(
            record?.taiouJiko.value as Array<string>,
        );

        const bikoValue = <string>record?.biko.value;
        const mailBody = <string>record?.main.value;

        if (raceConditionHandler({
            kintoneRecord: record,
            kintoneRecordId,
            triggerId: payload.trigger_id,
        }).valid) {
            const {displayName} = await saveSlackUserToKintone({
                userId, userName, kintoneRecordId, revision: '5',
            });

            await sendModal(
                payload.trigger_id,
                hankyouTaiouSend({
                    privateMetaData,
                    initialOptions: selectedTaiouJiko,
                    bikoValue,
                    mailBody,
                    kintoneLink: generateKintoneLink(kintoneRecordId, true),
                }),
            );


            updateMessageHankyo(
                record as unknown as KintoneHankyoTaiouRecord,
                kintoneRecordId,
                displayName,
            );
        }
    } catch (error) {
        sendModal(
            payload.trigger_id,
            hankyoTaiouRaceCondition(),
        );
    }
};

export default openHankyoTaiouActionModal;

