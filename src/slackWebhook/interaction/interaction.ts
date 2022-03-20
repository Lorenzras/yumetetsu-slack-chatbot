
import {RequestHandler} from 'express';
import {
  InteractionBody, InteractionPayload,
} from '../../types/slack';
import handleBlockActions from './handleBlockActions';
import handleViewSubmission from './handleViewSubmission';

// import {HANKYO_TAIOU} from '../../../UTIL/constants';


/* const getHankyoButton = (payload : interactionPayload) => {
    return payload
        .actions
        .find((item)=>item.action_id===HANKYO_TAIOU);
}; */


const interaction : RequestHandler = (req, res) => {
  res.status(204).json({message: 'OK'});

  console.log('hello');
  const body : InteractionBody = req.body;
  const payload : InteractionPayload = JSON.parse(body.payload);

  console.log(payload);
  switch (payload.type) {
    case 'block_actions':
      handleBlockActions(payload);
      break;
    case 'view_submission':
      handleViewSubmission(payload);
      break;
  }
};

export default interaction;
