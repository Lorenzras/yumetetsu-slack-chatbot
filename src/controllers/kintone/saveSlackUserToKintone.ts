

import {KintoneAppRecord} from './../../types/kintone';
import {getDisplayName} from './../slackEvents/api/getUser';
import {updateRecord} from './kintone';

interface SaveSlackUserToHankyoParam {
    userId: string,
    userName: string,
    kintoneRecordId: KintoneAppRecord,
    revision: string
}

const saveSlackUserToKintone = async ({
    userId, userName, kintoneRecordId, revision,
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
        result: updateRecord({...kintoneRecordId, record, revision}),
    };
};

export default saveSlackUserToKintone;
