"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLOCK_MAIL_BODY = exports.BLOCK_BIKO = exports.BLOCK_TAIOUJIKO = exports.HANKYO_TAIOU_SEND_MULTILINE = exports.HANKYO_TAIOU_SEND_CHECKBOXES = exports.HANKYO_TAIOU_SEND = exports.HANKYO_TAIOU_CONTENTS = exports.HANKYO_TAIOU = exports.KINTONE_DOMAIN = exports.KINTONE_HANKYO_APP_ID = exports.KINTONE_HANKYO_TOYOHASHI_APP_ID = exports.KINTONE_HANKYO_TOYOKAWA_APP_ID = exports.SLACK_SIGNING_SECRET = exports.KINTONE_API_TOKEN = exports.KINTONE_API_TOKEN_TOYOHASHI = exports.KINTONE_API_TOKEN_TOYOKAWA = exports.SLACK_BOT_TOKEN = void 0;
require('dotenv').config();
exports.SLACK_BOT_TOKEN = process
    .env.SLACK_BOT_TOKEN;
exports.KINTONE_API_TOKEN_TOYOKAWA = process
    .env.KINTONE_API_TOKEN_TOYOKAWA;
exports.KINTONE_API_TOKEN_TOYOHASHI = process
    .env.KINTONE_API_TOKEN_TOYOHASHI;
exports.KINTONE_API_TOKEN = process
    .env.KINTONE_API_TOKEN;
exports.SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET;
exports.KINTONE_HANKYO_TOYOKAWA_APP_ID = '155';
exports.KINTONE_HANKYO_TOYOHASHI_APP_ID = '167';
exports.KINTONE_HANKYO_APP_ID = '187';
exports.KINTONE_DOMAIN = process.env.KINTONE_DOMAIN;
exports.HANKYO_TAIOU = 'hankyoTaiou';
exports.HANKYO_TAIOU_CONTENTS = 'hankyoContents';
exports.HANKYO_TAIOU_SEND = `${exports.HANKYO_TAIOU}Send`;
// export const HANKYO_TAIOU_SEND_BLOCK = `${HANKYO_TAIOU_SEND}Block`;
exports.HANKYO_TAIOU_SEND_CHECKBOXES = `${exports.HANKYO_TAIOU_SEND}CheckBoxes`;
exports.HANKYO_TAIOU_SEND_MULTILINE = `${exports.HANKYO_TAIOU_SEND}Multiline`;
exports.BLOCK_TAIOUJIKO = 'blockTaiouJiko';
exports.BLOCK_BIKO = 'blockBiko';
exports.BLOCK_MAIL_BODY = 'blockMailBody';
//# sourceMappingURL=constants.js.map