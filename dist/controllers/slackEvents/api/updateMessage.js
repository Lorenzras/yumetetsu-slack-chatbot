"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slackApp_1 = __importDefault(require("../../../service/slackApp"));
const updateMessage = async (updateObject) => {
    try {
        const result = await slackApp_1.default.client.chat.update(updateObject);
        return result;
    }
    catch (error) {
        console.error(error);
    }
    ;
};
exports.default = updateMessage;
//# sourceMappingURL=updateMessage.js.map