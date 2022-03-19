import {View} from '@slack/types';

/* In case there was a race condition. */

interface HankyoTaiouRaceConditionParam {
  name?: string,
  emailBody?: string,
  privateMetaData?: string
}


const hankyoTaiouRaceCondition = (
  param?: HankyoTaiouRaceConditionParam,
) : View => {
  let name: string | undefined;
  let privateMetaData :string | undefined;

  if (typeof param !== undefined) {
    name = param?.name;
    privateMetaData = param?.privateMetaData;
  }


  const message = name ? `こちらの反響は *${name}* さんが対応者です。` : `誰かが対応者になりました！`;

  return {
    'type': 'modal',
    'private_metadata': privateMetaData,
    'title': {
      'type': 'plain_text',
      'text': `あら！`,
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
          'text': message,
        },
      },
    ],
  };
};

export default hankyoTaiouRaceCondition;
