import { getUnprocessedHankyoToyokawa } from '../../controller/kintone';
import kintoneRecsToSlack from '../../UTIL/kintoneRecsToSlack';

const { WebClient, LogLevel } = require('@slack/web-api');

const { SLACK_BOT_TOKEN } = process.env;

const client = new WebClient(SLACK_BOT_TOKEN, {
  logLevel: LogLevel.DEBUG,
});

export default async function mentionHandler(event) {
  if (event.bot_profile) return;
  const { text } = event;
  const { channel } = event;
  try {
    if (text.includes('未対応反響')) {
      const records = await getUnprocessedHankyoToyokawa();
      const slackBlocks = kintoneRecsToSlack(records);
      client.chat.postMessage({
        channel, SLACK_BOT_TOKEN, text: '未対応反響!', blocks: slackBlocks,
      });
    } else {
      client.chat.postMessage({ channel, SLACK_BOT_TOKEN, text: 'Mentioned!' });
    }
  } catch (error) {
    console.log(error);
  }
}
