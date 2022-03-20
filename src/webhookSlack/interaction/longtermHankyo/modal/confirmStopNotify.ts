import {View} from '@slack/types';
import {callbackIds} from './../../../../api/slack';

interface Param {
  privateMetaData: string,
}

export const confirmStopNotify = ({
  privateMetaData,
} : Param) : View => {
  return {
    'type': 'modal',
    'private_metadata': privateMetaData,
    'callback_id': callbackIds.stopNotify,
    'title': {
      'type': 'plain_text',
      'text': `もう追わないんですか。`,
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
          'text': `Slackへの通知が来なくなります。`,
        },
      },

    ],
  };
};
