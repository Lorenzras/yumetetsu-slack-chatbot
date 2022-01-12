
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

    console.log(result);
    return result;
};


/* const updateHankyoMessage = (
    record : KintoneHankyoTaiouRecord | undefined,
    kintoneRecordId : KintoneAppRecord,
    displayName = 'いない',
) => {
    // const slackDisplayName = <string>record?.slackDisplayName.value;
    const slackTS = <string>record?.slackTS.value;
    const slackChannel = <string>record?.slackChannel.value;
    const mailTo = <string>record?.mail_to.value;
    const mailFrom = <string>record?.mail_from.value;
    const title = <string>record?.title.value;

    console.log(
        'kintone',
        displayName,
        slackTS,
        mailTo,
        mailFrom,
        title,
        slackChannel,
        'slack',
    );

    updateMessage({
        ts: slackTS,
        channel: slackChannel,
        blocks: hankyoMessage({
            name: displayName,
            mailFrom,
            mailTo,
            title,
            kintoneRecordId,
        }),
    });
}; */

const openHankyoTaiouActionModal = async (payload: InteractionPayload) => {
    const privateMetaData = payload.view.private_metadata;
    const kintoneRecordId = JSON.parse(privateMetaData);
    const userId = payload.user.id;
    const userName = payload.user.username;


    const record = (
        await getRecord(kintoneRecordId)
    )?.record as unknown as KintoneHankyoTaiouRecord;

    const selectedTaiouJiko = kintoneCheckboxToSlackOptions(
        record?.taiouJiko.value as Array<string>,
    );

    const bikoValue = <string>record?.biko.value;
    const mailBody = <string>record?.main.value;
    // const slackDisplayName = <string>record?.slackDisplayName.value;
    // const isWithAssignedPerson = Boolean(slackDisplayName);


    /* if (isWithAssignedPerson) {
        // Anti-race condition.
        sendModal(
            payload.trigger_id,
            hankyoTaiouRaceCondition({name: slackDisplayName}),
        );

        updateMessageHankyo(
            record as unknown as KintoneHankyoTaiouRecord,
            kintoneRecordId,
            slackDisplayName,
        );
    } else { */
    if (raceConditionHandler({
        kintoneRecord: record,
        kintoneRecordId,
        triggerId: payload.trigger_id,
    }).valid) {
        saveSlackUserToKintone({userId, userName, kintoneRecordId})
            .then((res)=>{
                updateMessageHankyo(
                    record as unknown as KintoneHankyoTaiouRecord,
                    kintoneRecordId,
                    res.displayName,
                );
            });

        sendModal(
            payload.trigger_id,
            hankyouTaiouSend({
                privateMetaData,
                initialOptions: selectedTaiouJiko,
                bikoValue,
                mailBody,
                kintoneLink: generateKintoneLink(kintoneRecordId, true),
            }),
        );
    }
};

export default openHankyoTaiouActionModal;

