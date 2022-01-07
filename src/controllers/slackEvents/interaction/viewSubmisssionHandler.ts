import {InteractionPayload} from '../../../types/slack';
import {HANKYO_TAIOU, HANKYO_TAIOU_SEND} from '../../../UTIL/constants';
import saveSlackInputToKintone from '../../kintone/saveSlackInputToKintone';
import openHankyoTaiouSendModal from './modal/openHankyoTaiouSendModal';

const viewSubmisssionHandler = (payload: InteractionPayload) => {
    const callBackId = payload.view.callback_id;

    switch (callBackId) {
        case HANKYO_TAIOU:
            openHankyoTaiouSendModal(payload);
            return;
        case HANKYO_TAIOU_SEND:
            console.log(payload.view.state, 'Submitted');
            saveSlackInputToKintone(payload);
            return;
    }
};

export default viewSubmisssionHandler;
