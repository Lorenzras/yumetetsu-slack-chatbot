import {View} from '@slack/types';

/* In case there was a race condition. */

interface HankyoTaiouRaceConditionParam {
    name?: string,
    emailBody?: string,
    privateMetaData?: string
}

const hankyoTaiouRaceCondition = (
    {
        name = 'レンズ',
        emailBody='Body',
        privateMetaData='',
    } : HankyoTaiouRaceConditionParam,
) : View => {
    // Slack length limit 3000
    const cropEmailBody = emailBody.trim().slice(0, 2999);

    console.log(cropEmailBody.length, 'length');
    return {
        'type': 'modal',
        'private_metadata': privateMetaData,
        'title': {
            'type': 'plain_text',
            'text': `あら！`,
        },
        'close': {
            'type': 'plain_text',
            'text': 'わかりました',
            'emoji': true,
        },
        'blocks': [
            {
                'type': 'section',
                'text': {
                    'type': 'mrkdwn',
                    'text': `こちらの反響は *${name}* さんが対応者です。`,
                },
            },
        ],
    };
};

export default hankyoTaiouRaceCondition;
