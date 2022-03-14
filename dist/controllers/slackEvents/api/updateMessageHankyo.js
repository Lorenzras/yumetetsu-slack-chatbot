"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hankyoMessage_1 = __importDefault(require("../../../view/slack/chat/hankyoMessage"));
const updateMessage_1 = __importDefault(require("./updateMessage"));
const updateMessageHankyo = (record, kintoneRecordId, displayName = 'いない') => {
    // const slackDisplayName = <string>record?.slackDisplayName.value;
    const slackTS = record?.slackTS?.value;
    const slackChannel = record?.slackChannel?.value;
    const mailTo = record?.mail_to?.value;
    const mailFrom = record?.mail_from?.value;
    const title = record?.title?.value;
    (0, updateMessage_1.default)({
        ts: slackTS,
        channel: slackChannel,
        text: `反響は${displayName}が対応しました。`,
        blocks: (0, hankyoMessage_1.default)({
            name: displayName,
            mailFrom,
            mailTo,
            title,
            kintoneRecordId,
        }),
    });
};
exports.default = updateMessageHankyo;
//# sourceMappingURL=updateMessageHankyo.js.map