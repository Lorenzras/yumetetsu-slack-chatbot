/* eslint-disable max-len */
import {KnownBlock} from '@slack/types';
import {generateDoNetLink} from '../../../../../utils';


interface Param {
  userId: string,
  custId?: string,
}


export const confirmedAssignment = ({
  userId,
  custId,
}: Param) : KnownBlock[] => {
  return [
    {
      'type': 'section',
      'text': {
        'type': 'mrkdwn',
        'text': `:white_check_mark: <@${userId}> さんが対応しています。`,
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
