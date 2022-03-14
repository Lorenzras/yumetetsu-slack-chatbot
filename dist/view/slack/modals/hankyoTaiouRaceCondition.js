"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hankyoTaiouRaceCondition = (param) => {
    let name;
    let privateMetaData;
    if (typeof param !== undefined) {
        name = param?.name;
        privateMetaData = param?.privateMetaData;
    }
    const message = name ? `こちらの反響は *${name}* さんが対応者です。` : `誰かが対応者になりました！`;
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
                    'text': message,
                },
            },
        ],
    };
};
exports.default = hankyoTaiouRaceCondition;
//# sourceMappingURL=hankyoTaiouRaceCondition.js.map