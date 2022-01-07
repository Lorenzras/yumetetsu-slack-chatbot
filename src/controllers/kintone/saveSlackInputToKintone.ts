import {InteractionPayload} from '../../types/slack';
import {
    BLOCK_BIKO,
    BLOCK_TAIOUJIKO,
    HANKYO_TAIOU_SEND_CHECKBOXES,
    HANKYO_TAIOU_SEND_MULTILINE,
} from '../../UTIL/constants';
import {updateRecord} from './kintone';


const saveSlackInputToKintone = async (payload : InteractionPayload) => {
    const kintoneRecordId = JSON.parse(payload.view.private_metadata);
    const values = payload.view.state.values;

    const blockTaiouJiko = values[BLOCK_TAIOUJIKO];
    const inputCheckBoxes = blockTaiouJiko[HANKYO_TAIOU_SEND_CHECKBOXES];

    const blockBiko = values[BLOCK_BIKO];
    const inputBiko = blockBiko[HANKYO_TAIOU_SEND_MULTILINE];

    const selectedOptions = inputCheckBoxes
        .selected_options?.map(({value}) => value);

    console.log('inputBlock', values, inputBiko);

    const record = {
        taiouJiko: {value: selectedOptions},
        biko: {value: inputBiko.value},
    };

    const updateResult = await updateRecord(
        {...kintoneRecordId, record},
    );

    console.log(updateResult);
};


export default saveSlackInputToKintone;
