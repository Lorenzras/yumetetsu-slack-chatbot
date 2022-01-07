

import {KintoneAppRecord} from '../../../../types/kintone';
import {ActionButton, InteractionPayload} from '../../../../types/slack';

import hankyoTaiou from '../../../../view/slack/modals/hankyoTaiou';
import {getRecord} from '../../../kintone/kintone';
import sendModal from '../../api/sendModal';


const openHankyoTaiouModal = async (
    actionButton : ActionButton, payload: InteractionPayload,
) => {
    const kintoneAppRecord : KintoneAppRecord = JSON.parse(
        actionButton.value,
    );

    const kintoneRecord = await getRecord(kintoneAppRecord);


    if (kintoneRecord) {
        const record = kintoneRecord.record;
        const emailBody = record?.main.value?.toString() ||
    '問題が発生しました。@レンズを連絡してください。';

        const viewsOpen = sendModal(
            payload.trigger_id,
            hankyoTaiou(
                {
                    name: payload.user.name,
                    emailBody: emailBody,
                    privateMetaData: actionButton.value,
                },
            ),
        );

        // todo optimize using async await
        console.log(await viewsOpen);
    }
};

export default openHankyoTaiouModal;
