import {ActionButton,
    InteractionPayload,
} from '../../../../types/slack';

import {KintoneAppRecord,
    KintoneHankyoTaiouRecord,
} from '../../../../types/kintone';
import {getRecord} from '../../../kintone/kintone';

import sendModal from '../../api/sendModal';
import hankyoContents from '../../../../view/slack/modals/hankyoContents';

const openHankyoContentsModal = async (
    actionButton : ActionButton, payload: InteractionPayload,
) =>{
    const kintoneRecordId : KintoneAppRecord = JSON.parse(
        actionButton.value,
    );

    const kintoneRecord = (
        await getRecord(kintoneRecordId)
    )?.record as unknown as KintoneHankyoTaiouRecord;

    console.log(kintoneRecord, 'SUCCESS');

    const emailBody = kintoneRecord
        ?.main.value?.toString() ?? 'Error. Contact Lenz. ';
    const taiouJiko = kintoneRecord
        ?.taiouJiko.value.join(', ') ?? 'Error. Contact Lenz. ';
    sendModal(
        payload.trigger_id,
        hankyoContents(
            {
                name: payload.user.name,
                emailBody,
                taiouJiko,
                privateMetaData: actionButton.value,
            },
        ),
    );
};

export default openHankyoContentsModal;
