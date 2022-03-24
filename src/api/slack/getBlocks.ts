import {slackApp} from '../slackClient';

export const getBlocks = async (channelId: string, ts: string) => {
  const messages =(await slackApp.client.conversations.history({
    channel: channelId,
    latest: ts,
    limit: 1,
    inclusive: true,
  })).messages;

  if (messages) {
    return messages[0].blocks;
  }
};
