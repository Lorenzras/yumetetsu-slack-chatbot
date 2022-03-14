"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blockActionsHandler_1 = __importDefault(require("./blockActionsHandler"));
const viewSubmisssionHandler_1 = __importDefault(require("./viewSubmisssionHandler"));
// import {HANKYO_TAIOU} from '../../../UTIL/constants';
/* const getHankyoButton = (payload : interactionPayload) => {
    return payload
        .actions
        .find((item)=>item.action_id===HANKYO_TAIOU);
}; */
const interaction = (req, res) => {
    res.status(204).json({ message: 'OK' });
    console.log('hello');
    const body = req.body;
    const payload = JSON.parse(body.payload);
    console.log(payload);
    switch (payload.type) {
        case 'block_actions':
            (0, blockActionsHandler_1.default)(payload);
            break;
        case 'view_submission':
            (0, viewSubmisssionHandler_1.default)(payload);
            break;
    }
};
exports.default = interaction;
//# sourceMappingURL=interaction.js.map