
import {slackClient} from '../api/slackClient';

export const notifyDev = (message: string) => {
  console.log('Notifying dev.');
  slackClient.chat.postMessage({
    channel: process.env.SLACK_CHANNEL_ID_DEV,
    text: message,
  });
};
