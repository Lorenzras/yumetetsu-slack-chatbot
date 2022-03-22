/* eslint-disable max-len */
import {KnownBlock} from '@slack/types';
import {generateDoNetLink} from '../../../../../utils';


interface Param {
  userId: string,
  custId?: string,
  reason: string
}


export const confirmedStopNotify = ({
  userId,
  custId,
  reason,
}: Param) : KnownBlock[] => {
  return [
    {
      'type': 'section',
      'text': {
        'type': 'mrkdwn',
        'text': [
          `*この顧客の追客は、以下の理由により停止されました。*`,
          `${reason} ~<@${userId}>`,
        ].join('\n'),
      },
    },
    {
      'type': 'context',
      'elements': [
        {
          'type': 'image',
          'image_url': 'https://manage.do-network.com/favicon.ico',
          'alt_text': 'donetwork',
        },
        {
          'type': 'mrkdwn',
          'text': `<${generateDoNetLink(custId || '')}|donetworkで詳細を確認する> `,
        },
      ],
    },
  ];
};
