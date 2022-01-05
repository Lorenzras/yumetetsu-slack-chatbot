
// import { getUnprocessedHankyoToyokawa } from '../../kintone/kintone';
// import kintoneRecsToSlack from '../../../UTIL/kintoneRecsToSlack';
// import { WebClient, LogLevel } from '@slack/web-api';
import {replyMessage, sendUnprocessedHankyo} from './commandHandlers';


/**
 * Handles the app_mention event from slack
 *
 * @param {any} event
 * @returns {void}
 */
export default async function mentionHandler(event : any) {
    console.log(event, 'bot');
    if (event.bot_profile) return;
    const {text} = event;
    const {channel} = event;
    console.log('hello');
    try {
        switch (text) {
            case '未対応反響':
                sendUnprocessedHankyo(channel);
                break;
            default:
                replyMessage({channel, text: 'ご用は何ですか？'});
        }
    } catch (error) {
        console.log(error);
    }
}
