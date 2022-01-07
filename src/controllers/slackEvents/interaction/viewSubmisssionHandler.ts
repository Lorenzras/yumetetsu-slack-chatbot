import {InteractionPayload} from '../../../types/slack';
import {HANKYO_TAIOU} from '../../../UTIL/constants';
import openHankyoTaiouActionModal from './buttons/openHankyoTaiouActionModal';

const viewSubmisssionHandler = (payload: InteractionPayload) => {
    const callBackId = payload.view.callback_id;

    switch (callBackId) {
        case HANKYO_TAIOU:
            openHankyoTaiouActionModal(payload);
            return;
    }
};

export default viewSubmisssionHandler;
