import {View} from '@slack/types';
import {HANKYO_TAIOU} from '../../../UTIL/constants';

interface hankyouTaiouParam {
    name : string,
    emailBody : string,
    privateMetaData: string
}

const hankyoTaiou = (
    {name = 'レンズ', emailBody='Body', privateMetaData=''} : hankyouTaiouParam,
) : View => {
    // Slack length limit 3000
    const cropEmailBody = emailBody.trim().slice(0, 2999);

    console.log(cropEmailBody.length, 'length');
    return {
        'type': 'modal',
        'private_metadata': privateMetaData,
        'callback_id': HANKYO_TAIOU,
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
    };
};

export default hankyoTaiou;
