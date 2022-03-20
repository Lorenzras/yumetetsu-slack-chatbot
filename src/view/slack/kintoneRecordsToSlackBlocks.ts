/* eslint-disable valid-jsdoc */
import {parseISO} from 'date-fns';
import {ja} from 'date-fns/locale';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {Block} from '@slack/types';

/**
 * @deprecated
 */
const hankyoToBlock = ({
  mail_from: mailFrom,
  title,
  作成日時,
} : any) => `
*差出人：* ${mailFrom.value}
*件名：* ${title.value}

${formatDistanceToNow(
    parseISO(作成日時.value), {addSuffix: true, locale: ja},
  )}受信しました。
`;

/**
 * Generates slack blocks from kintone records
 * @deprecated
 * @param records kintone
 * @param header
 * @return {Block}
 */
export default function kintoneRecordsToSlackBlocks(
  records: any[],
  header = '未対応反響です。',
) : Block[] {
  const blocks = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: header,
        emoji: true,
      },
    },
    {
      type: 'divider',
    },
  ];

  records.forEach((record : any) => {
    const {$id} = record;
    blocks.push(
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: hankyoToBlock(record),
          emoji: true,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*<https://rdmuhwtt6gx7.cybozu.com/k/155/show#record=${$id.value}|Kintoneで開く>*`,
          emoji: true,
        },
      },
      {
        type: 'divider',
      },
    );
  });

  console.log(blocks);
  return blocks;
}
