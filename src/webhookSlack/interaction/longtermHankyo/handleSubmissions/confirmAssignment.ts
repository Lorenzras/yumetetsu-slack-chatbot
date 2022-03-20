import {updateKintone} from './updateKintone';
import {getDisplayName} from '../../../../api/slack';
import {slackClient} from '../../../../api/slackClient';
import {confirmedAssignment} from '../handleActions/blocks/';
import {ViewSubmitAction} from '@slack/bolt';

export const confirmAssignment = async (
  payload: InteractionPayload,
) => {
  const {

    view: {
      private_metadata: privateMetaData,
    },
    container: {
      message_ts: messageTs,
      channel_id: channelId,
    },
    user: {
      id: slackUserId,
    },
  } = payload;

  console.log('PAYLOADDDD', payload);
  const parsedPrivateMetaData = JSON.parse(privateMetaData) as {custId: string};

  await updateKintone(payload, {
    slackChannel: {value: channelId},
    slackTS: {value: messageTs},
    slackUserId: {value: slackUserId},
    slackDisplayName: {value: await getDisplayName(slackUserId)},
  });

  await slackClient.client.chat.postMessage({
    channel: channelId,
    blocks: confirmedAssignment({
      userId: slackUserId,
      custId: parsedPrivateMetaData.custId,
    }),
    thread_ts: messageTs,
  });
};
