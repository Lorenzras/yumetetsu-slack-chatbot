import {KintoneAppRecord} from '../../../types/kintone';


interface HankyoMessageParams {
    name: string,
    mailFrom: string,
    mailTo: string,
    title: string,
    kintoneRecordId: KintoneAppRecord
}

const hankyoMessage = ({
    name, mailFrom, mailTo, title, kintoneRecordId,
} : HankyoMessageParams) => {
    const {appId, recordId} = kintoneRecordId;

    return [
        {
            'type': 'header',
            'text': {
                'type': 'plain_text',
                'text': `この反響の対応者は${name}です`,
                'emoji': true,
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

    ];
};

export default hankyoMessage;
