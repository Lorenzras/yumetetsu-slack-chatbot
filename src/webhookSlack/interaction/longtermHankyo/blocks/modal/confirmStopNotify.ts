import {View} from '@slack/types';
import {callbackIds} from '../../../../../api/slack';
import {fields} from '../../config';

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
      'text': '追客を停止しますか。',
    },
    'submit': {
      'type': 'plain_text',
      'text': '追客を停止する',
      'emoji': true,
    },
    'close': {
      'type': 'plain_text',
      'text': 'キャンセル',
      'emoji': true,
    },

    'blocks': [
      {
        'block_id': fields.stopNotify.blockId,
        'type': 'input',
        'label': {
          'type': 'plain_text',
          'text': '停止理由を記入してください。',
          'emoji': true,
        },
        'element': {
          'type': 'plain_text_input',
          'action_id': fields.stopNotify.actionId,
          'multiline': true,
          'placeholder': {
            'type': 'plain_text',
            'text': '例：連絡が取れなくなりましたかあら。',
          },
        },
      },
    ],
  };
};
