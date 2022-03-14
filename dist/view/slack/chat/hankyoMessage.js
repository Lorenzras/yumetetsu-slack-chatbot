"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../UTIL/constants");
const hankyoMessage = ({ name, mailFrom, mailTo, title, kintoneRecordId, }) => {
    const { appId, recordId } = kintoneRecordId;
    return [
        {
            'type': 'section',
            'text': {
                'type': 'mrkdwn',
                'text': `:white_check_mark: この反響の対応者は *${name}* さんです`,
            },
        },
        {
            'type': 'section',
            'text': {
                'type': 'mrkdwn',
                // eslint-disable-next-line max-len
                'text': `*差出人：* ${mailFrom} \n *宛先：* ${mailTo} \n *件名：* ${title}`,
            },
        },
        {
            'type': 'actions',
            'elements': [
                {
                    'type': 'button',
                    'action_id': constants_1.HANKYO_TAIOU_CONTENTS,
                    'text': {
                        'type': 'plain_text',
                        'text': '対応済（詳細を見る）',
                    },
                    'value': JSON.stringify(kintoneRecordId),
                },
            ],
        },
        {
            'type': 'context',
            'elements': [
                {
                    'type': 'image',
                    'image_url': 'https://i.ibb.co/9TSqP8V/kintone-logo.png',
                    'alt_text': 'kintone',
                },
                {
                    'type': 'mrkdwn',
                    'text': `*キントーンで* *<https://rdmuhwtt6gx7.cybozu.com/k/${appId}/show#record=${recordId} | 見る>* ・ *<https://rdmuhwtt6gx7.cybozu.com/k/${appId}/show#record=${recordId}&mode=edit | 編集>*`,
                },
            ],
        },
        {
            'type': 'divider',
        },
    ];
};
exports.default = hankyoMessage;
//# sourceMappingURL=hankyoMessage.js.map