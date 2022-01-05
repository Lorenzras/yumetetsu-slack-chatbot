import {View} from '@slack/types';

interface hankyouTaiouParam {
    name : string,
    emailBody : string,
}

const hankyoTaiou = (
    {name = 'レンズ', emailBody='Body'} : hankyouTaiouParam,
) : View => {
    return {
        'type': 'modal',
        'title': {
            'type': 'plain_text',
            'text': `対応しますか。`,
        },
        'submit': {
            'type': 'plain_text',
            'text': 'はい',
            'emoji': true,
        },
        'close': {
            'type': 'plain_text',
            'text': 'いいえ',
            'emoji': true,
        },
        'blocks': [
            {
                'type': 'section',
                'text': {
                    'type': 'mrkdwn',
                    'text': `${name}さんが対応者です。対応しますか。`,
                },
            },
            {
                'type': 'section',
                'text': {
                    'type': 'mrkdwn',
                    'text': `*メールの内容* \n${emailBody}`,
                },
            },

        ],
    };
};

export default hankyoTaiou;
