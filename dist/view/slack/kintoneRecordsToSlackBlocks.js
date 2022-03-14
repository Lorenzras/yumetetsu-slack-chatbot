"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const locale_1 = require("date-fns/locale");
const formatDistanceToNow_1 = __importDefault(require("date-fns/formatDistanceToNow"));
const hankyoToBlock = ({ mail_from: mailFrom, title, 作成日時, }) => `
*差出人：* ${mailFrom.value}
*件名：* ${title.value}

${(0, formatDistanceToNow_1.default)((0, date_fns_1.parseISO)(作成日時.value), { addSuffix: true, locale: locale_1.ja })}受信しました。
`;
/**
 * Generates slack blocks from kintone records
 *
 * @param records kintone
 * @param header
 * @return {Block}
 */
function kintoneRecordsToSlackBlocks(records, header = '未対応反響です。') {
    const blocks = [
        {
            type: 'header',
            text: {
                type: 'plain_text',
                text: header,
                emoji: true,
            },
        },
        {
            type: 'divider',
        },
    ];
    records.forEach((record) => {
        const { $id } = record;
        blocks.push({
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: hankyoToBlock(record),
                emoji: true,
            },
        }, {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `*<https://rdmuhwtt6gx7.cybozu.com/k/155/show#record=${$id.value}|Kintoneで開く>*`,
                emoji: true,
            },
        }, {
            type: 'divider',
        });
    });
    console.log(blocks);
    return blocks;
}
exports.default = kintoneRecordsToSlackBlocks;
//# sourceMappingURL=kintoneRecordsToSlackBlocks.js.map