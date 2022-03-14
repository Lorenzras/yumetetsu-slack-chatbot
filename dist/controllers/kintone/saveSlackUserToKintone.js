"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUser_1 = require("./../slackEvents/api/getUser");
const kintone_1 = require("./kintone");
const saveSlackUserToKintone = async ({ userId, userName, kintoneRecordId, revision, }) => {
    const displayName = await (0, getUser_1.getDisplayName)(userId);
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
        result: (0, kintone_1.updateRecord)({ ...kintoneRecordId, record, revision }),
    };
};
exports.default = saveSlackUserToKintone;
//# sourceMappingURL=saveSlackUserToKintone.js.map