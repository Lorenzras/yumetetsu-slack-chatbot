
import {Option} from '@slack/types';
import {InteractionPayload} from '../../../../types/slack';
import hankyouTaiouSend
    from '../../../../view/slack/modals/hankyouTaiouSend';
import {generateKintoneLink} from '../../../kintone/helpers';
import {getRecord} from '../../../kintone/kintone';
import saveSlackUserToKintone from '../../../kintone/saveSlackUserToKintone';
import sendModal from '../../api/sendModal';

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

    saveSlackUserToKintone({userId, userName, kintoneRecordId});
    const record = (await getRecord(kintoneRecordId))?.record;
    const selectedTaiouJiko = kintoneCheckboxToSlackOptions(
        record?.taiouJiko.value as Array<string>,
    );

    const bikoValue : string = <string>record?.biko.value;
    console.log('biko', bikoValue);

    sendModal(
        payload.trigger_id,
        hankyouTaiouSend({
            privateMetaData,
            initialOptions: selectedTaiouJiko,
            bikoValue,
            kintoneLink: generateKintoneLink(kintoneRecordId),
        }),
    );
};

export default openHankyoTaiouActionModal;
