
import {RequestHandler} from 'express';
import {
    InteractionBody, InteractionPayload,
} from '../../../types/slack';
import blockActionsHandler from './blockActionsHandler';
import viewSubmisssionHandler from './viewSubmisssionHandler';

// import {HANKYO_TAIOU} from '../../../UTIL/constants';


/* const getHankyoButton = (payload : interactionPayload) => {
    return payload
        .actions
        .find((item)=>item.action_id===HANKYO_TAIOU);
}; */


const interaction : RequestHandler = (req, res) => {
    const body : InteractionBody = req.body;
    const payload : InteractionPayload = JSON.parse(body.payload);

    console.log(payload);
    switch (payload.type) {
        case 'block_actions':
            blockActionsHandler(payload);
            break;
        case 'view_submission':
            viewSubmisssionHandler(payload);
            break;
    }

    res.status(204).json({message: 'OK'});
};

export default interaction;
