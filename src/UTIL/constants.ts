require('dotenv').config();

export const SLACK_BOT_TOKEN = process
    .env.SLACK_BOT_TOKEN;

export const KINTONE_API_TOKEN_TOYOKAWA = process
    .env.KINTONE_API_TOKEN_TOYOKAWA;

export const KINTONE_API_TOKEN_TOYOHASHI = process
    .env.KINTONE_API_TOKEN_TOYOHASHI;

export const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET;

export const KINTONE_HANKYO_TOYOKAWA_APP_ID = '155';
export const KINTONE_HANKYO_TOYOHASHI_APP_ID = '167';
export const KINTONE_DOMAIN = process.env.KINTONE_DOMAIN;


export const HANKYO_TAIOU = 'hankyoTaiou';
export const HANKYO_TAIOU_SEND = `${HANKYO_TAIOU}Send`;
// export const HANKYO_TAIOU_SEND_BLOCK = `${HANKYO_TAIOU_SEND}Block`;
export const HANKYO_TAIOU_SEND_CHECKBOXES = `${HANKYO_TAIOU_SEND}CheckBoxes`;

export const HANKYO_TAIOU_SEND_MULTILINE = `${HANKYO_TAIOU_SEND}Multiline`;

export const BLOCK_TAIOUJIKO = 'blockTaiouJiko';
export const BLOCK_BIKO = 'blockBiko';
export const BLOCK_MAIL_BODY = 'blockMailBody';
