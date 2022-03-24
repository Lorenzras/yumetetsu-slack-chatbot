/* eslint-disable max-len */
import {KnownBlock} from '@slack/types';
import {generateDoNetLink} from '../../../../../utils';


interface Param {
  userId: string,
  custId?: string,
  reason?: string
}


export const confirmedAction = ({
  userId,
  custId,
  reason,
}: Param) : KnownBlock[] => {
  const mainMessage = reason ? [
    `*この顧客の追客は、以下の理由により停止されました。*`,
    `${reason} ~<@${userId}>`,
  ]
    .join('\n') :
    `:white_check_mark: <@${userId}> さんが対応しています。`;

  return [
    {
      'type': 'section',
      'text': {
        'type': 'mrkdwn',
        'text': mainMessage,
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
          'text': `<${generateDoNetLink(custId || '')}|donetworkで開く> `,
        },
      ],
    },
  ];
};
