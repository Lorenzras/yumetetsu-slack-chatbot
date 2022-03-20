import {KnownBlock} from '@slack/types';
import type {KintoneAppRecord} from '../../../../../types/kintone';
import {HANKYO_TAIOU_CONTENTS} from '../../../../../UTIL/constants';


interface HankyoMessageParams {
  userId: string,
  mailFrom: string,
  mailTo: string,
  title: string,
  kintoneRecordId: KintoneAppRecord
}

export const hankyoMessage = ({
  userId, mailFrom, mailTo, title, kintoneRecordId,
} : HankyoMessageParams) : KnownBlock[] => {
  const {appId, recordId} = kintoneRecordId;

  return [
    {
      'type': 'section',
      'text': {
        'type': 'mrkdwn',
        'text': `:white_check_mark: この反響の対応者は <@${userId}> さんです`,

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
      'type': 'actions',
      'elements': [
        {
          'type': 'button',
          'action_id': HANKYO_TAIOU_CONTENTS,
          'text': {
            'type': 'plain_text',
            'text': '対応済（詳細を見る）',
          },
          'value': JSON.stringify(kintoneRecordId),
        },
      ],

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
    {
      'type': 'divider',
    },

  ];
};
