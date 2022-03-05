import {
    KintoneAppRecord, KintoneHankyoTaiouRecord,
} from '../../../types/kintone';
import hankyoMessage from '../../../view/slack/chat/hankyoMessage';
import updateMessage from './updateMessage';


const updateMessageHankyo = (
    record : KintoneHankyoTaiouRecord | undefined,
    kintoneRecordId : KintoneAppRecord,
    displayName = 'いない',
) => {
    // const slackDisplayName = <string>record?.slackDisplayName.value;
    const slackTS = <string>record?.slackTS?.value;
    const slackChannel = <string>record?.slackChannel?.value;
    const mailTo = <string>record?.mail_to?.value;
    const mailFrom = <string>record?.mail_from?.value;
    const title = <string>record?.title?.value;


    updateMessage({
        ts: slackTS,
        channel: slackChannel,
        text: `反響は${displayName}が対応しました。`,
        blocks: hankyoMessage({
            name: displayName,
            mailFrom,
            mailTo,
            title,
            kintoneRecordId,
        }),
    });
};


export default updateMessageHankyo;
