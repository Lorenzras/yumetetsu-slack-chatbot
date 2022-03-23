import {updateKintone} from './updateKintone';
import {fields as stopNotifyFields} from '../config';
import {slackClient} from '../../../../api/slackClient';
import {ViewSubmitAction} from '@slack/bolt';
import {notifyDev} from '../../../../utils/slack';
import {confirmedStopNotify} from '../blocks';


export const confirmStopNotify = async (
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

  /* In case no data was passed, report to developer. */
  if (!(channelId && messageTs && slackUserId) ) {
    // eslint-disable-next-line max-len
    notifyDev(`Channel and or messageTs were not included in passed privatemetadata. ChannelID: ${channelId}, MessageTS: ${messageTs}`);
    return;
  }

  const {stopNotify} = stopNotifyFields;
  const reason = payload
    .view.state
    .values[stopNotify.blockId][stopNotify.actionId].value || '';

  await updateKintone(payload, {
    stopNotifyReason: {value: reason},
  });

  await slackClient.chat.postMessage({
    channel: channelId,
    text: '通知が停止されました。',
    blocks: confirmedStopNotify({
      userId: slackUserId,
      custId: custId,
      reason,
    }),
    thread_ts: messageTs,
  });
};
