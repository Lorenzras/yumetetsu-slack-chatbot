

import {getDisplayName} from '../../../../api/slack';
import {updateRecord} from '../../../../api/kintone';

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

  const record : KintoneHankyoRecord = {
    slackUser: {
      value: userName,
    },
    slackDisplayName: {
      value: displayName,
    },
    slackId: {
      value: userId,
    },

  };

  return {
    displayName,
    result: updateRecord({...kintoneRecordId, record, revision}),
  };
};

export default saveSlackUserToKintone;
