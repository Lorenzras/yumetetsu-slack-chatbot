import {ActionButton,
    InteractionPayload,
} from '../../../../types/slack';

import {KintoneAppRecord,
    KintoneHankyoTaiouRecord,
} from '../../../../types/kintone';
import {getRecord} from '../../../kintone/kintone';

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
};

export default openHankyoContentsModal;
