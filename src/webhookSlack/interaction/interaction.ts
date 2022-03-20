
import {RequestHandler} from 'express';
import {
  InteractionBody, InteractionPayload,
} from '../../types/slack';
import handleBlockActions from './handleBlockActions';
import handleViewSubmission from './handleViewSubmission';

const interaction : RequestHandler = (req, res) => {
  res.status(204).json({message: 'OK'});

  const body : InteractionBody = req.body;
  const payload : InteractionPayload = JSON.parse(body.payload);

  console.log('PAYLOAD TYPE:', payload);
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
