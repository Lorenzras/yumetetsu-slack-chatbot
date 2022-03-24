import {updateKintone} from './updateKintone';
import {getDisplayName} from '../../../../api/slack';
import {slackClient} from '../../../../api/slackClient';
import {ViewSubmitAction} from '@slack/bolt';
import {notifyDev} from '../../../../utils/slack';
import {fields as stopNotifyFields} from '../config';
import {confirmedAction} from '../blocks/message/confirmedAction';

const getReasonInPayload = (payload: ViewSubmitAction): string => {
  const {stopNotify} = stopNotifyFields;
  const reasonBlock = payload.view.state.values[stopNotify.blockId];

  return reasonBlock[stopNotify.actionId].value || '';
};

export const confirmAction = async (
  payload: ViewSubmitAction,
) => {
  const {
    view: {
      private_metadata: privateMetaData,
    },
    user: {
      id: slackUserId,
    },
  } = payload;


  const {
    custId,
    messageTs,
    channelId,
  } = JSON
    .parse(privateMetaData) as PrivateMetaData;

  if (!(channelId && messageTs) ) {
    // eslint-disable-next-line max-len
    notifyDev(`Channel and or messageTs were not included in passed privatemetadata. ChannelID: ${channelId}, MessageTS: ${messageTs}`);
    return;
  }

  const reason = getReasonInPayload(payload);

  try {
    await updateKintone(payload, {
      slackChannel: {value: channelId},
      slackTS: {value: messageTs},
      slackUserId: {value: slackUserId},
      slackDisplayName: {value: await getDisplayName(slackUserId)},
      stopNotifyReason: {value: getReasonInPayload(payload)},
    });

    /* Post to thread */
    await slackClient.chat.postMessage({
      channel: channelId,
      text: '長期追客',
      blocks: confirmedAction({
        userId: slackUserId,
        custId,
        reason,
      }),
      thread_ts: messageTs,
    });
  } catch (e) {
    console.log('Error.', e);
  }
};
