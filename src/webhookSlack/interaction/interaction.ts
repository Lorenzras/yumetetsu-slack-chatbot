
import {ViewSubmitAction} from '@slack/bolt';
import {RequestHandler} from 'express';

import handleBlockActions from './handleBlockActions';
import handleViewSubmission from './handleViewSubmission';

const interaction : RequestHandler = (req, res) => {
  res.status(204).json({message: 'OK'});

  const body : InteractionBody = req.body;
  const payload : InteractionPayload
  | ViewSubmitAction = JSON.parse(body.payload);

  console.log('PAYLOAD TYPE:', payload);
  switch (payload.type) {
    case 'block_actions':
      handleBlockActions(payload);
      break;
    case 'view_submission':
      handleViewSubmission(payload as ViewSubmitAction);
      break;
  }
};

export default interaction;
