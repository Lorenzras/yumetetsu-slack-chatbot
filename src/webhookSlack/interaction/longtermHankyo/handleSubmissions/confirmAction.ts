import {updateKintone} from './updateKintone';
import {getDisplayName} from '../../../../api/slack';
import {slackClient} from '../../../../api/slackClient';
import {ViewSubmitAction} from '@slack/bolt';
import {notifyDev} from '../../../../utils/slack';
import {fields as stopNotifyFields} from '../config';
import {confirmedAction} from '../blocks/message/confirmedAction';


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

  const {stopNotify} = stopNotifyFields;
  const reason = payload
    .view.state
    .values[stopNotify.blockId][stopNotify.actionId].value || '';

  try {
    await updateKintone(payload, {
      slackChannel: {value: channelId},
      slackTS: {value: messageTs},
      slackUserId: {value: slackUserId},
      slackDisplayName: {value: await getDisplayName(slackUserId)},
      stopNotifyReason: {value: reason},
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
