"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../UTIL/constants");
const saveSlackInputToKintone_1 = __importDefault(require("../../kintone/saveSlackInputToKintone"));
const openHankyoTaiouSendModal_1 = __importDefault(require("./modal/openHankyoTaiouSendModal"));
const viewSubmisssionHandler = async (payload) => {
    const callBackId = payload.view.callback_id;
    switch (callBackId) {
        case constants_1.HANKYO_TAIOU:
            await (0, openHankyoTaiouSendModal_1.default)(payload);
            return;
        case constants_1.HANKYO_TAIOU_SEND:
            console.log(payload.view.state, 'Submitted');
            await (0, saveSlackInputToKintone_1.default)(payload);
            return;
    }
};
exports.default = viewSubmisssionHandler;
//# sourceMappingURL=viewSubmisssionHandler.js.map