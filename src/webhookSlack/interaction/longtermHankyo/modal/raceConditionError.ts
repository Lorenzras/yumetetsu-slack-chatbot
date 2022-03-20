import {View} from '@slack/types';

/* In case there was a race condition. */

interface HankyoTaiouRaceConditionParam {
  userId: string
}


export const raceConditionError = (
  param: HankyoTaiouRaceConditionParam,
) : View => {
  return {
    'type': 'modal',
    'title': {
      'type': 'plain_text',
      'text': `エラーが発生しました。`,
    },
    'close': {
      'type': 'plain_text',
      'text': 'わかりました',
      'emoji': true,
    },
    'blocks': [
      {
        'type': 'section',
        'text': {
          'type': 'mrkdwn',
          'text': `このレコードは、編集セッション中に <@${param?.userId} > によって変更されました。`,
        },
      },
    ],
  };
};
