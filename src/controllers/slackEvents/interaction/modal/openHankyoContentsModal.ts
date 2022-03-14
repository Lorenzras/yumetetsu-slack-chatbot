import {ActionButton,
    InteractionPayload,
} from '../../../../types/slack';

import {KintoneAppRecord,
} from '../../../../types/kintone';
import {getRecord} from '../../../kintone/kintone';

import sendModal from '../../api/sendModal';
import hankyoContents from '../../../../view/slack/modals/hankyoContents';
// import {getDisplayName} from '../../api/getUser';

const openHankyoContentsModal = async (
    actionButton : ActionButton, payload: InteractionPayload,
) =>{
    const kintoneRecordId : KintoneAppRecord = JSON.parse(
        actionButton.value,
    );

    const kintoneRecord = (
        await getRecord(kintoneRecordId)
    )?.record as unknown as hankyo.SavedFields;

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
        hankyoContents(
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
