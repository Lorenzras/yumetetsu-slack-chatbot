
import {sendModal} from '../../../../api/slack';
import updateMessageHankyo from '../lib/updateMessageHankyo';
import {raceConditionError} from '../blocks/modal';

interface RaceConditionParams {
  kintoneRecord : KintoneHankyoRecord,
  kintoneRecordId: KintoneAppRecord,
  triggerId: string
}

export const handleRaceCondition = ({
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

