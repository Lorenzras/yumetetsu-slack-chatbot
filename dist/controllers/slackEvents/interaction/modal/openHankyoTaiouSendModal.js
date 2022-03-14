"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hankyoTaiouRaceCondition_1 = __importDefault(require("../../../../view/slack/modals/hankyoTaiouRaceCondition"));
const hankyouTaiouSend_1 = __importDefault(require("../../../../view/slack/modals/hankyouTaiouSend"));
const helpers_1 = require("../../../kintone/helpers");
const kintone_1 = require("../../../kintone/kintone");
const saveSlackUserToKintone_1 = __importDefault(require("../../../kintone/saveSlackUserToKintone"));
const sendModal_1 = __importDefault(require("../../api/sendModal"));
const updateMessageHankyo_1 = __importDefault(require("../../api/updateMessageHankyo"));
const raceConditionHandler_1 = __importDefault(require("../../validations/raceConditionHandler"));
const kintoneCheckboxToSlackOptions = (kintoneSelectedOptions) => {
    if (!kintoneSelectedOptions.length)
        return;
    const result = kintoneSelectedOptions.map((value) => {
        return {
            'text': {
                'type': 'plain_text',
                'text': value,
            },
            'value': value,
        };
    });
    return result;
};
const openHankyoTaiouActionModal = async (payload) => {
    const privateMetaData = payload.view.private_metadata;
    const kintoneRecordId = JSON.parse(privateMetaData);
    const userId = payload.user.id;
    const userName = payload.user.username;
    const kintoneRecord = await (0, kintone_1.getRecord)(kintoneRecordId);
    const record = kintoneRecord?.record;
    const selectedTaiouJiko = kintoneCheckboxToSlackOptions(record?.taiouJiko.value);
    const bikoValue = record?.biko.value;
    const mailBody = record?.main.value;
    const revision = record?.$revision?.value;
    if ((0, raceConditionHandler_1.default)({
        kintoneRecord: record,
        kintoneRecordId,
        triggerId: payload.trigger_id,
    }).valid) {
        const { displayName, result } = await (0, saveSlackUserToKintone_1.default)({
            userId, userName, kintoneRecordId, revision,
        });
        if ((await result)?.revision) {
            // If succesfully updated, show next modal
            await (0, sendModal_1.default)(payload.trigger_id, (0, hankyouTaiouSend_1.default)({
                privateMetaData,
                initialOptions: selectedTaiouJiko,
                bikoValue,
                mailBody,
                kintoneLink: (0, helpers_1.generateKintoneLink)(kintoneRecordId, true),
            }));
            (0, updateMessageHankyo_1.default)(record, kintoneRecordId, displayName);
        }
        else {
            // If failed, show error modal.
            console.log('error');
            (0, sendModal_1.default)(payload.trigger_id, (0, hankyoTaiouRaceCondition_1.default)());
        }
    }
};
exports.default = openHankyoTaiouActionModal;
//# sourceMappingURL=openHankyoTaiouSendModal.js.map