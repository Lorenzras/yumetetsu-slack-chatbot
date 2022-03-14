"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyMessage = exports.sendUnprocessedHankyo = void 0;
/* import kintoneRecordsToSlackBlocks
  from '../../../view/slack/kintoneRecordsToSlackBlocks'; */
const web_api_1 = require("@slack/web-api");
const { SLACK_BOT_TOKEN } = process.env;
const client = new web_api_1.WebClient(SLACK_BOT_TOKEN, {
    logLevel: web_api_1.LogLevel.DEBUG,
});
/**
 * Send unprocessed hankyo to defined slack channel
 *
 * @param chatPostMessage
 */
const sendUnprocessedHankyo = async (chatPostMessage) => {
    const { channel } = chatPostMessage;
    client.chat.postMessage({
        channel, SLACK_BOT_TOKEN, text: '未対応反響!',
    });
};
exports.sendUnprocessedHankyo = sendUnprocessedHankyo;
const replyMessage = ({ channel, text }) => {
    client.chat.postMessage({
        channel, SLACK_BOT_TOKEN, text: text,
    });
};
exports.replyMessage = replyMessage;
exports.default = {};
//# sourceMappingURL=commandHandlers.js.map