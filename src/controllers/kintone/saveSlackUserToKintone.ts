

import {KintoneAppRecord} from './../../types/kintone';
import {getDisplayName} from './../slackEvents/api/getUser';
import {updateRecord} from './kintone';

interface SaveSlackUserToHankyoParam {
    userId: string,
    userName: string,
    kintoneRecordId: KintoneAppRecord
}

const saveSlackUserToKintone = async ({
    userId, userName, kintoneRecordId,
}: SaveSlackUserToHankyoParam) => {
    const displayName = await getDisplayName(userId);

    const record = {
        slackUser: {
            value: userName,
        },

        slackDisplayName: {
            value: displayName,
        },
    };

    return {
        displayName,
        kintoneRecord: updateRecord({...kintoneRecordId, record}),
    };
};

export default saveSlackUserToKintone;
