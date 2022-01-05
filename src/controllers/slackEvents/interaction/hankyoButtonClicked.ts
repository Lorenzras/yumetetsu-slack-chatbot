
import {RequestHandler} from 'express';
import {kintoneAppRecord} from '../../../types/kintone';
import {HANKYO_TAIOU} from '../../../UTIL/constants';
import hankyoTaiou from '../../../view/slack/modals/hankyoTaiou';
import {getRecord} from '../../kintone/kintone';
import sendModal from './modal/sendModal';


interface interactionBody {
  payload : string
}

interface interactionPayload {
  user: {
    id: string,
    username: string,
    name: string
  },
  container : {
    type: string,
    message_ts: string,
    channel_id: string,
    is_ephemeral: boolean,
  },
  actions : Array<{
    action_id: string,
    value: string
  }>
  trigger_id: string,
}


const getHankyoButton = (payload : interactionPayload) => {
  return payload
      .actions
      .find((item)=>item.action_id===HANKYO_TAIOU);
};

const hankyoButtonClicked : RequestHandler = async (req, res) => {
  const body : interactionBody = req.body;
  const payload : interactionPayload = JSON.parse(body.payload);
  const hankyoTaiouButton = getHankyoButton(payload);
  const kintoneAppRecord : kintoneAppRecord = JSON.parse(
    hankyoTaiouButton!.value,
  );

  sendModal(
      payload.trigger_id,
      hankyoTaiou({name: payload.user.name, emailBody: 'body'}),
  );

  console.log(await getRecord(kintoneAppRecord), 'type');
  res.status(200).send('<h1>Success<h1>');
};

export default hankyoButtonClicked;
