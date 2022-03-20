import {
  KintoneAppRecord,
  KintoneHankyoTaiouRecord} from '../../../../types/kintone';
import {sendModal} from '../../../../api/slack';
import updateMessageHankyo from '../lib/updateMessageHankyo';
import {raceConditionError} from '../blocks/modal';

interface RaceConditionParams {
  kintoneRecord : KintoneHankyoTaiouRecord,
  kintoneRecordId: KintoneAppRecord,
  triggerId: string
}

const raceConditionHandler = ({
  kintoneRecord,
  kintoneRecordId,
  triggerId,
} : RaceConditionParams) => {
  const slackDisplayName = kintoneRecord?.slackDisplayName?.value;
  const isWithAssignedPerson = Boolean(slackDisplayName);

  if (isWithAssignedPerson) {
    sendModal(
      triggerId,
      raceConditionError({name: slackDisplayName}),
    );

    updateMessageHankyo(
      kintoneRecord,
      kintoneRecordId,
      slackDisplayName,
    );

    return {valid: false};
  }

  return {valid: true};
};

export default raceConditionHandler;
