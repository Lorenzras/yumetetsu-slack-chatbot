

import {kintoneAppRecord} from '../../../../types/kintone';
import {ActionButton, InteractionPayload} from '../../../../types/slack';

import hankyoTaiou from '../../../../view/slack/modals/hankyoTaiou';
import {getRecord} from '../../../kintone/kintone';
import sendModal from '../modal/sendModal';


/* const getHankyoButton = (payload : interactionPayload) => {
    return payload
        .actions
        .find((item)=>item.action_id===HANKYO_TAIOU);
}; */

const hankyoButtonClicked = async (
    actionButton : ActionButton, payload: InteractionPayload,
) => {
    const kintoneAppRecord : kintoneAppRecord = JSON.parse(
        actionButton.value,
    );

    const kintoneRecord = await getRecord(kintoneAppRecord);

    if (kintoneRecord) {
        const record = kintoneRecord.record;
        const emailBody = record?.main.value?.toString() ||
    '問題が発生しました。@レンズを連絡してください。';

        sendModal(
            payload.trigger_id,
            hankyoTaiou(
                {
                    name: payload.user.name,
                    emailBody: emailBody,
                },
            ),
        );
    }
};

export default hankyoButtonClicked;
