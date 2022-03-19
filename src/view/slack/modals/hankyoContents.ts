/* eslint-disable max-len */
import {View} from '@slack/types';

interface hankyoContentsParam {
  name: string,
  emailBody: string,
  taiouJiko: string,
  biko: string,
  privateMetaData: string
}

const hankyoContents = ({
  name,
  emailBody,
  taiouJiko = '無',
  biko,
  privateMetaData,
} : hankyoContentsParam) : View => {
  const cropEmailBody = emailBody.trim().slice(0, 2999);

  console.log(taiouJiko || '無', 'hesdsdsdllo');
  return ({
    'type': 'modal',
    'private_metadata': privateMetaData,
    'title': {
      'type': 'plain_text',
      'text': `反響の内容です。`,
    },
    'close': {
      'type': 'plain_text',
      'text': '閉じる',
      'emoji': true,
    },
    'blocks': [
      {
        'type': 'header',
        'text': {
          'type': 'plain_text',
          'text': `:white_check_mark: ${name}さんが対応しました。:white_check_mark:`,
        },
      },

      {type: 'divider'},

      {
        'type': 'section',
        'text': {
          'type': 'mrkdwn',
          'text': `:email: *メール内容* :email:`,
        },
      },
      {
        'type': 'section',
        'text': {
          'type': 'plain_text',
          'text': cropEmailBody,
        },
      },

      {type: 'divider'},

      {
        'type': 'section',
        'text': {
          'type': 'mrkdwn',
          'text': `:information_source: *対応事項* :information_source:`,
        },
      },
      {
        'type': 'section',
        'text': {
          'type': 'plain_text',
          'text': taiouJiko || '無',
        },
      },

      {type: 'divider'},

      {
        'type': 'section',
        'text': {
          'type': 'mrkdwn',
          'text': `:speech_balloon: *備考* :speech_balloon:`,
        },
      },
      {
        'type': 'section',
        'text': {
          'type': 'plain_text',
          'text': biko || '無',
        },
      },

    ],
  });
};

export default hankyoContents;
