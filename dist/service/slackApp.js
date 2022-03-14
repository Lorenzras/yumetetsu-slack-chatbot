"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require the Bolt for JavaScript package (github.com/slackapi/bolt)
const bolt_1 = require("@slack/bolt");
const slackApp = new bolt_1.App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    logLevel: bolt_1.LogLevel.DEBUG,
});
exports.default = slackApp;
//# sourceMappingURL=slackApp.js.map