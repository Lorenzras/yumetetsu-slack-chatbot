import {Option, View} from '@slack/types';
import {callbackIds, actionIds} from '../../../../ids';
import {blockIds} from '../../config';


interface HankyoTaiouSendParam {
  initialOptions ?: Option[],
  bikoValue ?: string,
  mailBody ?: string,
  privateMetaData: string,
  kintoneLink : string

}

export const submitAction = ({
  initialOptions,
  privateMetaData,
  bikoValue,
  mailBody,
  kintoneLink,
} : HankyoTaiouSendParam) : View => {
  return {
    'type': 'modal',
    'private_metadata': privateMetaData,
    'callback_id': callbackIds.hankyoSubmit,

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
        'type': 'input',
        'block_id': blockIds.mail,
        'element': {
          'type': 'plain_text_input',
          'multiline': true,
          'action_id': actionIds.multiline,
          'initial_value': mailBody,
        },
        'label': {
          'type': 'plain_text',
          'text': 'メール内容',
          'emoji': true,
        },
      },
      {
        'type': 'divider',
      },
      {
        'type': 'section',
        'text': {
          'type': 'mrkdwn',
          'text': '*対応事項*',
        },
      },
      {
        'block_id': blockIds.actionType,
        'type': 'actions',

        'elements': [

          {
            'type': 'checkboxes',
            'action_id': actionIds.checkboxes,
            'initial_options': initialOptions,

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
                'value': 'メール',
              },
              {
                'text': {
                  'type': 'plain_text',
                  'text': '来店・訪問アポ',
                },
                'value': '来店・訪問アポ',
              },
              {
                'text': {
                  'type': 'plain_text',
                  'text': '現地案内',
                },
                'value': '現地案内',
              },
              {
                'text': {
                  'type': 'plain_text',
                  'text': '留守電残し',
                },
                'value': '留守電残し',
              },
            ],
          },

        ],
      },
      {
        'type': 'input',
        'block_id': blockIds.note,
        'element': {
          'type': 'plain_text_input',
          'multiline': true,
          'action_id': actionIds.multiline,
          'initial_value': bikoValue,
        },
        'label': {
          'type': 'plain_text',
          'text': '備考',
          'emoji': true,
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
            // eslint-disable-next-line max-len
            'text': `*<${kintoneLink} | Kintoneで編集します。>*`,
          },
        ],
      },

    ],
  };
};
