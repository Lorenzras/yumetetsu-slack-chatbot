
import {Option} from '@slack/types';

import {InteractionPayload} from '../../../../types/slack';
import hankyoMessage from '../../../../view/slack/chat/hankyoMessage';
import hankyoTaiouRaceCondition
    from '../../../../view/slack/modals/hankyoTaiouRaceCondition';
import hankyouTaiouSend
    from '../../../../view/slack/modals/hankyouTaiouSend';
import {generateKintoneLink} from '../../../kintone/helpers';
import {getRecord} from '../../../kintone/kintone';
import saveSlackUserToKintone from '../../../kintone/saveSlackUserToKintone';
import sendModal from '../../api/sendModal';
import updateMessage from '../../api/updateMessage';


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

const openHankyoTaiouActionModal = async (payload: InteractionPayload) => {
    const privateMetaData = payload.view.private_metadata;
    const kintoneRecordId = JSON.parse(privateMetaData);
    const userId = payload.user.id;
    const userName = payload.user.username;


    const record = (
        await getRecord(kintoneRecordId)
    )?.record;

    const selectedTaiouJiko = kintoneCheckboxToSlackOptions(
        record?.taiouJiko.value as Array<string>,
    );

    console.log(record);


    const bikoValue = <string>record?.biko.value;
    const mailBody = <string>record?.main.value;
    const slackDisplayName = <string>record?.slackDisplayName.value;
    const isWithAssignedPerson = Boolean(slackDisplayName);


    if (isWithAssignedPerson) {
        // Anti-race condition.
        sendModal(
            payload.trigger_id,
            hankyoTaiouRaceCondition({name: slackDisplayName}),
        );
    } else {
        // Send modal to process the hankyo.
        saveSlackUserToKintone({userId, userName, kintoneRecordId});
        /* const slackTS = <string>record?.slackTS.value;
        const slackChannel = <string>record?.slackChannel.value;
        const mailTo = <string>record?.mail_to.value;
        const mailFrom = <string>record?.mail_from.value;
        const title = <string>record?.mailFrom.value;

        console.log(
            'kintone', slackTS, mailTo, mailFrom, title, slackChannel, 'slack',
        );

        updateMessage({
            ts: slackTS,
            channel: slackChannel,
            blocks: hankyoMessage({
                name: slackDisplayName,
                mailFrom,
                mailTo,
                title,
                kintoneRecordId,
            }),
        }); */

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

