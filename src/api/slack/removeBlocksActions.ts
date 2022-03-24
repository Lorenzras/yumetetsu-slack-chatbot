import {Block} from '@slack/types';
import {slackClient} from '../slackClient';
import {getBlocks} from './getBlocks';

export const removeBlocksActions = async (
  channelId: string,
  ts: string,
) => {
  const blocks = await getBlocks(channelId, ts);
  if (!blocks) return;

  const deletedActionsBlocks = blocks.filter(
    (block) => block.type !== 'actions',
  );

  console.log(deletedActionsBlocks);

  return await slackClient.chat.update({
    channel: channelId,
    ts,
    text: '長期追客',
    blocks: deletedActionsBlocks as Block[],
  });
};
