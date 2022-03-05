import {InteractionPayload} from '../../../types/slack';
import {HANKYO_TAIOU, HANKYO_TAIOU_CONTENTS} from '../../../UTIL/constants';
import openHankyoContentsModal from './modal/openHankyoContentsModal';
import openHankyoTaiouModal from './modal/openHankyoTaiouModal';


/* const getActionId = (payload : InteractionPayload) => {
    return payload
        .actions[0];
}; */

const getActionButton = (payload: InteractionPayload) => {
    console.log(payload.type, 'PAYLOAD');
    return payload
        .actions[0];
};


const blockActions = (payload: InteractionPayload) => {
    const action = getActionButton(payload);
    const actionId = action.action_id;

    console.log(action, 'action');


    switch (actionId) {
        case HANKYO_TAIOU:
            openHankyoTaiouModal(action, payload);
            break;
        case HANKYO_TAIOU_CONTENTS:
            openHankyoContentsModal(action, payload);
            break;
    }
};

export default blockActions;
