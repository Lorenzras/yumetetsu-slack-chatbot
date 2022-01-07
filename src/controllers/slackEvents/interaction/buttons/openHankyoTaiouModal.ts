

import {kintoneAppRecord} from '../../../../types/kintone';
import {ActionButton, InteractionPayload} from '../../../../types/slack';

import hankyoTaiou from '../../../../view/slack/modals/hankyoTaiou';
import {getRecord} from '../../../kintone/kintone';
import sendModal from '../modal/sendModal';


const openHankyoTaiouModal = async (
    actionButton : ActionButton, payload: InteractionPayload,
) => {
    const kintoneAppRecord : kintoneAppRecord = JSON.parse(
        actionButton.value,
    );

    // const updatedKintoneRecord = slackPayloadToKintoneRecord(payload);
    const kintoneRecord = await getRecord(kintoneAppRecord);

    // remove this here
    /*   const updateResult = await updateRecord(
        {...kintoneAppRecord, record: updatedKintoneRecord},
    );

    console.log(updateResult); */

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
