import { getUnprocessedHankyoToyokawa } from "../../kintone/kintone";
import kintoneRecsToSlack from "../../../UTIL/kintoneRecsToSlack";
import { WebClient, LogLevel, ChatPostMessageArguments } from '@slack/web-api';

const { SLACK_BOT_TOKEN } = process.env;

const client = new WebClient(SLACK_BOT_TOKEN, {
  logLevel: LogLevel.DEBUG,
});



export const sendUnprocessedHankyo = async ({channel} : ChatPostMessageArguments) => {
  const records = await getUnprocessedHankyoToyokawa();
      const slackBlocks = kintoneRecsToSlack(records);
      client.chat.postMessage({
        channel, SLACK_BOT_TOKEN, text: '未対応反響!', blocks: slackBlocks,
      });
}

export const replyMessage = ({channel, text, blocks = []} : ChatPostMessageArguments) => {
  client.chat.postMessage({
    channel, SLACK_BOT_TOKEN, text: text
  });
}


export default {}