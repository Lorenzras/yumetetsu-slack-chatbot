/* import {kintoneAppRecord} from '../../../../types/kintone';
import {updateRecord} from '../../../kintone/kintone';
import {getDisplayName} from '../../api/getUser'; */

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
    const record = {
        slackUser: {
            value: userName,
        },

        slackDisplayName: {
            value: await getDisplayName(userId),
        },
    };

    updateRecord({...kintoneRecordId, record});
};

export default saveSlackUserToKintone;
