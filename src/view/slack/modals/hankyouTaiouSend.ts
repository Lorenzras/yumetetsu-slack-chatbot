import {Option, View} from '@slack/types';

import {
    BLOCK_BIKO,
    BLOCK_TAIOUJIKO,
    HANKYO_TAIOU_SEND,
    HANKYO_TAIOU_SEND_CHECKBOXES,
    HANKYO_TAIOU_SEND_MULTILINE,
} from '../../../UTIL/constants';

interface HankyoTaiouSendParam {
    initialOptions ?: Option[],
    bikoValue ?: string
    privateMetaData: string,
    kintoneLink : string

}

const hankyouTaiouSend = ({
    initialOptions,
    privateMetaData,
    bikoValue,
    kintoneLink,
} : HankyoTaiouSendParam) : View => {
    return {
        'type': 'modal',
        'private_metadata': privateMetaData,
        'callback_id': HANKYO_TAIOU_SEND,

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
                'type': 'section',
                'text': {
                    'type': 'mrkdwn',
                    'text': '対応事項を入力してください。',
                },
            },
            {
                'block_id': BLOCK_TAIOUJIKO,
                'type': 'actions',
                'elements': [
                    {
                        'type': 'checkboxes',
                        'action_id': HANKYO_TAIOU_SEND_CHECKBOXES,
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
                'block_id': BLOCK_BIKO,
                'element': {
                    'type': 'plain_text_input',
                    'multiline': true,
                    'action_id': HANKYO_TAIOU_SEND_MULTILINE,
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
                        'image_url': 'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
                        'alt_text': 'cute cat',
                    },
                    {
                        'type': 'mrkdwn',
                        // eslint-disable-next-line max-len
                        'text': `詳細をご覧になりますか？ *<${kintoneLink} | Kintoneで開く>*`,
                    },
                ],
            },
        ],
    };
};

export default hankyouTaiouSend;
