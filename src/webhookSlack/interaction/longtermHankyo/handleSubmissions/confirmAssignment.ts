import {updateKintone} from './updateKintone';
import {getDisplayName} from '../../../../api/slack';
import {slackClient} from '../../../../api/slackClient';
import {confirmedAssignment} from '../blocks';
import {ViewSubmitAction} from '@slack/bolt';
import {notifyDev} from '../../../../utils/slack';


export const confirmAssignment = async (
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

  await updateKintone(payload, {
    slackChannel: {value: channelId},
    slackTS: {value: messageTs},
    slackUserId: {value: slackUserId},
    slackDisplayName: {value: await getDisplayName(slackUserId)},
  });

  /* Post to thread */
  await slackClient.chat.postMessage({
    channel: channelId,
    text: `長期追客`,
    blocks: confirmedAssignment({
      userId: slackUserId,
      custId: custId,
    }),
    thread_ts: messageTs,
  });
};
