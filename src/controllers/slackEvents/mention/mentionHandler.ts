//import { getUnprocessedHankyoToyokawa } from '../../kintone/kintone';
//import kintoneRecsToSlack from '../../../UTIL/kintoneRecsToSlack';
//import { WebClient, LogLevel } from '@slack/web-api';
import { replyMessage, sendUnprocessedHankyo } from './commandHandlers';
//const { WebClient, LogLevel } = require('@slack/web-api');

//const { SLACK_BOT_TOKEN } = process.env;

/* const client = new WebClient(SLACK_BOT_TOKEN, {
  logLevel: LogLevel.DEBUG,
}); */

export default async function mentionHandler  (event : any) {
  if (event.bot_profile) return;
  const { text } = event;
  const { channel } = event;
  console.log("hello")
  try {

    switch(text){
      case '未対応反響':
        sendUnprocessedHankyo(channel)
        break;
      default:
        replyMessage({channel, text: "ご用は何ですか？"})
    }
    /* if (text.includes('未対応反響')) {
      const records = await getUnprocessedHankyoToyokawa();
      const slackBlocks = kintoneRecsToSlack(records);
      client.chat.postMessage({
        channel, SLACK_BOT_TOKEN, text: '未対応反響!', blocks: slackBlocks,
      });
    } else {
      client.chat.postMessage({ channel, SLACK_BOT_TOKEN, text: 'はい？' });
    } */
  } catch (error) {
    console.log(error);
  }
}
