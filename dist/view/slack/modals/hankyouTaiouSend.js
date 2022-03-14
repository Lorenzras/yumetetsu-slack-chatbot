"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../UTIL/constants");
const hankyouTaiouSend = ({ initialOptions, privateMetaData, bikoValue, mailBody, kintoneLink, }) => {
    return {
        'type': 'modal',
        'private_metadata': privateMetaData,
        'callback_id': constants_1.HANKYO_TAIOU_SEND,
        'submit': {
            'type': 'plain_text',
            'text': '送信',
            'emoji': true,
        },
        'close': {
            'type': 'plain_text',
            'text': '後でする',
            'emoji': true,
        },
        'title': {
            'type': 'plain_text',
            'text': '対応履歴を編集する',
            'emoji': true,
        },
        'blocks': [
            {
                'type': 'input',
                'block_id': constants_1.BLOCK_MAIL_BODY,
                'element': {
                    'type': 'plain_text_input',
                    'multiline': true,
                    'action_id': constants_1.HANKYO_TAIOU_SEND_MULTILINE,
                    'initial_value': mailBody,
                },
                'label': {
                    'type': 'plain_text',
                    'text': 'メール内容',
                    'emoji': true,
                },
            },
            {
                'type': 'divider',
            },
            {
                'type': 'section',
                'text': {
                    'type': 'mrkdwn',
                    'text': '*対応事項*',
                },
            },
            {
                'block_id': constants_1.BLOCK_TAIOUJIKO,
                'type': 'actions',
                'elements': [
                    {
                        'type': 'checkboxes',
                        'action_id': constants_1.HANKYO_TAIOU_SEND_CHECKBOXES,
                        'initial_options': initialOptions,
                        'options': [
                            {
                                'text': {
                                    'type': 'plain_text',
                                    'text': 'TEL',
                                },
                                'value': 'TEL',
                            },
                            {
                                'text': {
                                    'type': 'plain_text',
                                    'text': 'メール',
                                },
                                'value': 'メール',
                            },
                            {
                                'text': {
                                    'type': 'plain_text',
                                    'text': '来店・訪問アポ',
                                },
                                'value': '来店・訪問アポ',
                            },
                            {
                                'text': {
                                    'type': 'plain_text',
                                    'text': '現地案内',
                                },
                                'value': '現地案内',
                            },
                            {
                                'text': {
                                    'type': 'plain_text',
                                    'text': '留守電残し',
                                },
                                'value': '留守電残し',
                            },
                        ],
                    },
                ],
            },
            {
                'type': 'input',
                'block_id': constants_1.BLOCK_BIKO,
                'element': {
                    'type': 'plain_text_input',
                    'multiline': true,
                    'action_id': constants_1.HANKYO_TAIOU_SEND_MULTILINE,
                    'initial_value': bikoValue,
                },
                'label': {
                    'type': 'plain_text',
                    'text': '備考',
                    'emoji': true,
                },
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
                        // eslint-disable-next-line max-len
                        'text': `*<${kintoneLink} | Kintoneで編集します。>*`,
                    },
                ],
            },
        ],
    };
};
exports.default = hankyouTaiouSend;
//# sourceMappingURL=hankyouTaiouSend.js.map