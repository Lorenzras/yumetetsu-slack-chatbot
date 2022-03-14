"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slackApp_1 = __importDefault(require("../../../service/slackApp"));
const sendModal = async (triggerId, view) => {
    try {
        // Call the views.open method using the WebClient passed to listeners
        const result = await slackApp_1.default.client.views.open({
            trigger_id: triggerId,
            view,
        });
        // console.log(result);
        return result;
    }
    catch (error) {
        console.error(error);
    }
    ;
};
exports.default = sendModal;
//# sourceMappingURL=sendModal.js.map