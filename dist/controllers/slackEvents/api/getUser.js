"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDisplayName = void 0;
/* eslint-disable max-len */
const slackApp_1 = __importDefault(require("../../../service/slackApp"));
const getUser = async (userId) => {
    return await slackApp_1.default.client.users.info({ user: userId });
};
const getDisplayName = async (userId) => {
    const user = (await getUser(userId)).user;
    const displayName = user?.profile?.display_name || user?.name || user?.id || '？？';
    return displayName;
};
exports.getDisplayName = getDisplayName;
exports.default = getUser;
//# sourceMappingURL=getUser.js.map