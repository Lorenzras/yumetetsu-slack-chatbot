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
            'text': `対応しますか。`,
        },
        'close': {
            'type': 'plain_text',
            'text': '閉じる',
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
    });
};

export default hankyoContents;
