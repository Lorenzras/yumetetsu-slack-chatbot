
import {RequestHandler} from 'express';
import {
    ActionButton, InteractionBody, InteractionPayload,
} from '../../../types/slack';
// import {HANKYO_TAIOU} from '../../../UTIL/constants';
import hankyoButtonClicked from './buttons/hankyoButtonClicked';


/* const getHankyoButton = (payload : interactionPayload) => {
    return payload
        .actions
        .find((item)=>item.action_id===HANKYO_TAIOU);
}; */

const getActionButton = (payload: InteractionPayload) => {
    console.log(payload.type, 'PAYLOAD');
    return payload
        .actions[0];
};

const interaction : RequestHandler = (req, res) => {
    const body : InteractionBody = req.body;
    const payload : InteractionPayload = JSON.parse(body.payload);

    console.log(payload);
    switch (payload.type) {
        case 'block_actions':
            const actionButton : ActionButton = getActionButton(payload);
            hankyoButtonClicked(actionButton, payload);
            break;
        case 'view_submission':
            console.log('Submitted View');
            // To do
    }

    res.status(204).json({message: 'OK'});
};

export default interaction;
