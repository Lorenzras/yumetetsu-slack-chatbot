"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kintone_1 = require("../../../kintone/kintone");
const sendModal_1 = __importDefault(require("../../api/sendModal"));
const hankyoContents_1 = __importDefault(require("../../../../view/slack/modals/hankyoContents"));
// import {getDisplayName} from '../../api/getUser';
const openHankyoContentsModal = async (actionButton, payload) => {
    const kintoneRecordId = JSON.parse(actionButton.value);
    const kintoneRecord = (await (0, kintone_1.getRecord)(kintoneRecordId))?.record;
    const emailBody = kintoneRecord
        ?.main.value?.toString() ?? 'Error. Contact Lenz. ';
    const taiouJiko = kintoneRecord
        ?.taiouJiko.value.join(', ') ?? 'Error. Contact Lenz. ';
    const biko = kintoneRecord
        ?.biko.value ?? 'Error. Contact Lenz. ';
    const name = kintoneRecord
        .slackDisplayName?.value || kintoneRecord.slackUser.value;
    (0, sendModal_1.default)(payload.trigger_id, (0, hankyoContents_1.default)({
        name,
        emailBody,
        taiouJiko,
        biko,
        privateMetaData: actionButton.value,
    }));
};
exports.default = openHankyoContentsModal;
//# sourceMappingURL=openHankyoContentsModal.js.map