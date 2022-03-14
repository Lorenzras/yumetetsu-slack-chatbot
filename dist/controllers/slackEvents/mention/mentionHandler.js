"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { getUnprocessedHankyoToyokawa } from '../../kintone/kintone';
// import kintoneRecsToSlack from '../../../UTIL/kintoneRecsToSlack';
// import { WebClient, LogLevel } from '@slack/web-api';
const commandHandlers_1 = require("./commandHandlers");
/**
 * Handles the app_mention event from slack
 *
 * @param {any} event
 * @returns {void}
 */
async function mentionHandler(event) {
    console.log(event, 'bot');
    if (event.bot_profile)
        return;
    const { text } = event;
    const { channel } = event;
    console.log('hello');
    try {
        switch (text) {
            case '未対応反響':
                (0, commandHandlers_1.sendUnprocessedHankyo)(channel);
                break;
            default:
                (0, commandHandlers_1.replyMessage)({ channel, text: 'ご用は何ですか？' });
        }
    }
    catch (error) {
        console.log(error);
    }
}
exports.default = mentionHandler;
//# sourceMappingURL=mentionHandler.js.map