
import {KintoneHankyoTaiouRecord} from '../../types/kintone';
import {InteractionPayload} from '../../types/slack';
import {
    BLOCK_BIKO,
    BLOCK_MAIL_BODY,
    BLOCK_TAIOUJIKO,
    HANKYO_TAIOU_SEND_CHECKBOXES,
    HANKYO_TAIOU_SEND_MULTILINE,
} from '../../UTIL/constants';
import {updateRecord} from './kintone';


const saveSlackInputToKintone = async (payload : InteractionPayload) => {
    const kintoneRecordId = JSON.parse(payload.view.private_metadata);
    const values = payload.view.state.values;

    // メール内容
    const mailBody = values[BLOCK_MAIL_BODY][HANKYO_TAIOU_SEND_MULTILINE];


    // 対応事項
    const blockTaiouJiko = values[BLOCK_TAIOUJIKO];
    const inputCheckBoxes = blockTaiouJiko[HANKYO_TAIOU_SEND_CHECKBOXES];
    const selectedOptions = inputCheckBoxes
        .selected_options?.map(({value}) => value);

    // 備考
    const blockBiko = values[BLOCK_BIKO];
    const inputBiko = blockBiko[HANKYO_TAIOU_SEND_MULTILINE];


    const record : KintoneHankyoTaiouRecord = {
        taiouJiko: {value: selectedOptions},
        biko: {value: inputBiko.value},
        main: {value: mailBody.value},
    };

    const updateResult = await updateRecord(
        {...kintoneRecordId, record},
    );

    console.log(updateResult);
};


export default saveSlackInputToKintone;
