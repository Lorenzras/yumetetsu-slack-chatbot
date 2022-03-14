"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKintoneLink = void 0;
const generateKintoneLink = ({ appId, recordId }, isEdit = false) => {
    return `https://rdmuhwtt6gx7.cybozu.com/k/${appId}/show#record=${recordId}&mode=${isEdit ? 'edit' : 'show'}`;
};
exports.generateKintoneLink = generateKintoneLink;
//# sourceMappingURL=helpers.js.map