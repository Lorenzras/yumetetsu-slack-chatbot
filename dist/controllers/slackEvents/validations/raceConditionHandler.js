"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hankyoTaiouRaceCondition_1 = __importDefault(require("../../../view/slack/modals/hankyoTaiouRaceCondition"));
const sendModal_1 = __importDefault(require("../api/sendModal"));
const updateMessageHankyo_1 = __importDefault(require("../api/updateMessageHankyo"));
const raceConditionHandler = ({ kintoneRecord, kintoneRecordId, triggerId, }) => {
    const slackDisplayName = kintoneRecord?.slackDisplayName?.value;
    const isWithAssignedPerson = Boolean(slackDisplayName);
    if (isWithAssignedPerson) {
        (0, sendModal_1.default)(triggerId, (0, hankyoTaiouRaceCondition_1.default)({ name: slackDisplayName }));
        (0, updateMessageHankyo_1.default)(kintoneRecord, kintoneRecordId, slackDisplayName);
        return { valid: false };
    }
    return { valid: true };
};
exports.default = raceConditionHandler;
//# sourceMappingURL=raceConditionHandler.js.map