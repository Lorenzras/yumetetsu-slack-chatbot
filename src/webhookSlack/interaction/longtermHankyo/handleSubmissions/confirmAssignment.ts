import {updateKintone} from './updateKintone';
import {getDisplayName} from '../../../../api/slack';
import {slackClient} from '../../../../api/slackClient';
import {confirmedAssignment} from '../handleActions/blocks/';
import {ViewSubmitAction} from '@slack/bolt';

export interface ConfirmAssignmentData {
  appId: string,
  recordId: string,
  custId: string,
  channelId: string,
  messageTs: string
}

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
    .parse(privateMetaData) as ConfirmAssignmentData;

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
      custId: custId,
    }),
    thread_ts: messageTs,
  });
};
