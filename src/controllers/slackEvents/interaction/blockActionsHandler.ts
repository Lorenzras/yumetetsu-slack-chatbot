import {InteractionPayload} from '../../../types/slack';
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
        case 'hankyoTaiou':
            openHankyoTaiouModal(action, payload);
            break;
    }
};

export default blockActions;
