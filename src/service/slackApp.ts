// Require the Bolt for JavaScript package (github.com/slackapi/bolt)
import {App, LogLevel} from '@slack/bolt';

const slackApp = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  logLevel: LogLevel.DEBUG,
});


export default slackApp;
