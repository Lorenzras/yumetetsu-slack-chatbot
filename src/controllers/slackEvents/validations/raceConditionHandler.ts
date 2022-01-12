import {
    KintoneAppRecord,
    KintoneHankyoTaiouRecord,
} from '../../../types/kintone';
import hankyoTaiouRaceCondition
    from '../../../view/slack/modals/hankyoTaiouRaceCondition';
import sendModal from '../api/sendModal';
import updateMessageHankyo from '../api/updateMessageHankyo';


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
            hankyoTaiouRaceCondition({name: slackDisplayName}),
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
