import {View} from '@slack/types';
import {callbackIds} from '../../../../../api/slack/';


interface Param {
  name : string,
  emailBody : string,
  privateMetaData: string
}

export const initialConfirmation = (
  {name = 'レンズ', emailBody='Body', privateMetaData=''} : Param,
) : View => {
  // Slack length limit 3000
  const cropEmailBody = emailBody.trim().slice(0, 2999);

  return {
    'type': 'modal',
    'private_metadata': privateMetaData,
    'callback_id': callbackIds.hankyoFormOpen,
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
          'type': 'mrkdwn',
          'text': cropEmailBody,
        },
      },

    ],
  };
};
