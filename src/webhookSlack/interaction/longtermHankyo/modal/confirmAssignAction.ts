import {View} from '@slack/types';
import {callbackIds} from '../../../../api/slack';

interface Param {
  privateMetaData: string,
}

export const confirmAssignAction = ({
  privateMetaData,
} : Param) : View => {
  return {
    'type': 'modal',
    'private_metadata': privateMetaData,
    'callback_id': callbackIds.actOnLtHankyo,
    'title': {
      'type': 'plain_text',
      'text': `対応しますか？`,
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
          'text': `対応しますか？`,
        },
      },

    ],
  };
};
