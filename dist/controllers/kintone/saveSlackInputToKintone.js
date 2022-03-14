"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../UTIL/constants");
const kintone_1 = require("./kintone");
const saveSlackInputToKintone = async (payload) => {
    const kintoneRecordId = JSON.parse(payload.view.private_metadata);
    const values = payload.view.state.values;
    // メール内容
    const mailBody = values[constants_1.BLOCK_MAIL_BODY][constants_1.HANKYO_TAIOU_SEND_MULTILINE];
    // 対応事項
    const blockTaiouJiko = values[constants_1.BLOCK_TAIOUJIKO];
    const inputCheckBoxes = blockTaiouJiko[constants_1.HANKYO_TAIOU_SEND_CHECKBOXES];
    const selectedOptions = inputCheckBoxes
        .selected_options.map(({ value }) => value);
    // 備考
    const blockBiko = values[constants_1.BLOCK_BIKO];
    const inputBiko = blockBiko[constants_1.HANKYO_TAIOU_SEND_MULTILINE];
    const record = {
        taiouJiko: { value: selectedOptions },
        biko: { value: inputBiko.value ?? '' },
        main: { value: mailBody.value ?? '' },
    };
    const updateResult = await (0, kintone_1.updateRecord)({ ...kintoneRecordId, record });
    console.log(updateResult);
};
exports.default = saveSlackInputToKintone;
//# sourceMappingURL=saveSlackInputToKintone.js.map