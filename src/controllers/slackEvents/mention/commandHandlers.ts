
/* import kintoneRecordsToSlackBlocks
  from '../../../view/slack/kintoneRecordsToSlackBlocks'; */
import {WebClient, LogLevel, ChatPostMessageArguments} from '@slack/web-api';

const {SLACK_BOT_TOKEN} = process.env;

const client = new WebClient(SLACK_BOT_TOKEN, {
  logLevel: LogLevel.DEBUG,
});

/**
 * Send unprocessed hankyo to defined slack channel
 *
 * @param chatPostMessage
 */
export const sendUnprocessedHankyo = async (
    chatPostMessage : ChatPostMessageArguments,
) : Promise<void> => {
  const {channel} = chatPostMessage;
  client.chat.postMessage({
    channel, SLACK_BOT_TOKEN, text: '未対応反響!',
  });
};

export const replyMessage = (
    {channel, text} : ChatPostMessageArguments) => {
  client.chat.postMessage({
    channel, SLACK_BOT_TOKEN, text: text,
  });
};


export default {};
