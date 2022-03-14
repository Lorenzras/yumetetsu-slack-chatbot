"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hankyoTaiou_1 = __importDefault(require("../../../../view/slack/modals/hankyoTaiou"));
const kintone_1 = require("../../../kintone/kintone");
const sendModal_1 = __importDefault(require("../../api/sendModal"));
const raceConditionHandler_1 = __importDefault(require("../../validations/raceConditionHandler"));
const openHankyoTaiouModal = async (actionButton, payload) => {
    const kintoneRecordId = JSON.parse(actionButton.value);
    const kintoneRecord = (await (0, kintone_1.getRecord)(kintoneRecordId))?.record;
    if (kintoneRecord &&
        (0, raceConditionHandler_1.default)({
            kintoneRecord,
            kintoneRecordId,
            triggerId: payload.trigger_id
        }).valid) {
        // Display taiou confirmation modal
        const emailBody = kintoneRecord?.main.value?.toString() ||
            '問題が発生しました。@レンズを連絡してください。';
        (0, sendModal_1.default)(payload.trigger_id, (0, hankyoTaiou_1.default)({
            name: payload.user.name,
            emailBody: emailBody,
            privateMetaData: actionButton.value,
        }));
        // todo optimize using async await
        // console.log(await viewsOpen);
    }
};
exports.default = openHankyoTaiouModal;
//# sourceMappingURL=openHankyoTaiouModal.js.map