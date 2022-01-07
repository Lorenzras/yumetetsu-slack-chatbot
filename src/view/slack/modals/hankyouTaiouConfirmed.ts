import {View} from '@slack/types';

const hankyouTaiouConfirmed = () : View => {
    // to do add initial options
    return {
        'type': 'modal',
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
                'type': 'actions',
                'elements': [
                    {
                        'type': 'checkboxes',
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
                                'value': 'email',
                            },
                            {
                                'text': {
                                    'type': 'plain_text',
                                    'text': '来店・訪問アポ',
                                },
                                'value': 'visit',
                            },
                            {
                                'text': {
                                    'type': 'plain_text',
                                    'text': '現地案内',
                                },
                                'value': 'fieldGuide',
                            },
                            {
                                'text': {
                                    'type': 'plain_text',
                                    'text': '留守電残し',
                                },
                                'value': 'answeringMachine',
                            },
                        ],
                    },
                ],
            },
        ],
    };
};

export default hankyouTaiouConfirmed;
