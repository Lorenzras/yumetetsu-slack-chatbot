"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = 'https://slack.com/api/chat.postMessage';
const { SLACK_BOT_TOKEN } = process.env;
const pushMessage = async (req, res) => {
    const text = `Test! ${new Date()}`;
    console.log(text, SLACK_BOT_TOKEN, 'its here');
    const postResponse = await axios_1.default.post(url, {
        channel: 'C02R6P88K7E',
        text,
        username: 'Test App',
        icon_emoji: ':+1:',
    }, { headers: { authorization: `Bearer ${SLACK_BOT_TOKEN}` } });
    console.log(postResponse);
    res.status(200).json('yey');
};
exports.default = pushMessage;
//# sourceMappingURL=pushMessage.js.map