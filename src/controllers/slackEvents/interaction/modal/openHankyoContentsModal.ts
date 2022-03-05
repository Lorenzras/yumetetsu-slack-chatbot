import {ActionButton,
    InteractionPayload,
} from '../../../../types/slack';

import {KintoneAppRecord} from '../../../../types/kintone';

const openHankyoContentsModal = async (
    actionButton : ActionButton, payload: InteractionPayload,
) =>{
    const kintoneRecordId : KintoneAppRecord = JSON.parse(
        actionButton.value,
    );

    console.log(kintoneRecordId, 'SUCCESS');
};

export default openHankyoContentsModal;
