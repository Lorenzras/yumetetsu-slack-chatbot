/* eslint-disable max-len */
import {View} from '@slack/types';

interface hankyoContentsParam {
    name: string,
    emailBody: string,
    taiouJiko: string,
    privateMetaData: string
}

const hankyoContents = ({
    name,
    emailBody,
    taiouJiko,
    privateMetaData,
} : hankyoContentsParam) : View => {
    const cropEmailBody = emailBody.trim().slice(0, 2999);
    return ({
        'type': 'modal',
        'private_metadata': privateMetaData,
        'title': {
            'type': 'plain_text',
            'text': `反響の内容です。`,
        },
        'close': {
            'type': 'plain_text',
            'text': '閉じる',
            'emoji': true,
        },
        'blocks': [
            {
                'type': 'header',
                'text': {
                    'type': 'plain_text',
                    'text': `:white_check_mark: ${name}さんが対応しました。:white_check_mark:`,
                },
            },

            {type: 'divider'},

            {
                'type': 'section',
                'text': {
                    'type': 'mrkdwn',
                    'text': `*メール内容*`,
                },
            },
            {
                'type': 'section',
                'text': {
                    'type': 'plain_text',
                    'text': cropEmailBody,
                },
            },

        ],
    });
};

export default hankyoContents;
