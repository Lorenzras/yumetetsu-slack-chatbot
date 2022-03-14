"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../UTIL/constants");
const openHankyoContentsModal_1 = __importDefault(require("./modal/openHankyoContentsModal"));
const openHankyoTaiouModal_1 = __importDefault(require("./modal/openHankyoTaiouModal"));
/* const getActionId = (payload : InteractionPayload) => {
    return payload
        .actions[0];
}; */
const getActionButton = (payload) => {
    console.log(payload.type, 'PAYLOAD');
    return payload
        .actions[0];
};
const blockActions = (payload) => {
    const action = getActionButton(payload);
    const actionId = action.action_id;
    console.log(action, 'action');
    switch (actionId) {
        case constants_1.HANKYO_TAIOU:
            (0, openHankyoTaiouModal_1.default)(action, payload);
            break;
        case constants_1.HANKYO_TAIOU_CONTENTS:
            (0, openHankyoContentsModal_1.default)(action, payload);
            break;
    }
};
exports.default = blockActions;
//# sourceMappingURL=blockActionsHandler.js.map