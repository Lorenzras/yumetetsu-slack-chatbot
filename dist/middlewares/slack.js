"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_api_1 = require("@slack/events-api");
const constants_1 = require("../UTIL/constants");
const slackEvents = (0, events_api_1.createEventAdapter)(constants_1.SLACK_SIGNING_SECRET);
exports.default = slackEvents;
//# sourceMappingURL=slack.js.map