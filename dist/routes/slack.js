"use strict";
// slackRouter.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {createEventAdapter} from "@slack/events-api"
const express_1 = require("express");
const mentionHandler_1 = __importDefault(require("../controllers/slackEvents/mention/mentionHandler"));
const slack_1 = __importDefault(require("../middlewares/slack"));
const pushMessage_1 = __importDefault(require("../controllers/slackEvents/mention/pushMessage"));
const interaction_1 = __importDefault(require("../controllers/slackEvents/interaction/interaction"));
const body_parser_1 = __importDefault(require("body-parser"));
const route = (0, express_1.Router)();
// json parser will return empty body.
// I used the following instead but it was not in slack documentation. :D
route.use(body_parser_1.default.urlencoded({ extended: true }));
route.get('/webhook/test', pushMessage_1.default);
route.use('/webhook', slack_1.default.expressMiddleware());
slack_1.default.on('app_mention', mentionHandler_1.default);
slack_1.default.on('error', (e) => console.log('error', e));
route.post('/interactive-endpoint', interaction_1.default);
exports.default = route;
//# sourceMappingURL=slack.js.map