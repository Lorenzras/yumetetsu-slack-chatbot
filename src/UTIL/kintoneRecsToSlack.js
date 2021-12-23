import { parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const hankyoToBlock = ({
  mail_from: mailFrom,
  title,
  作成日時,
}) => `
*差出人：* ${mailFrom.value}
*件名：* ${title.value}

${formatDistanceToNow(parseISO(作成日時.value), { addSuffix: true, locale: ja })}受信しました。
`;

export default function kintoneRecsToSlack(records, header = '未対応反響です。') {
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

  records.forEach((record) => {
    const { $id } = record;
    blocks.push(
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: hankyoToBlock(record),
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*<https://rdmuhwtt6gx7.cybozu.com/k/155/show#record=${$id.value}|Kintoneで開く>*`,
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
