/* const client = new WebClient(SLACK_BOT_TOKEN, {
  logLevel: LogLevel.DEBUG,
}); */

require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const eventsApi = require('@slack/events-api');
const { default: mentionHandler } = require('./src/slaclEvents/mention/mentionHandler');

const { SLACK_SIGNING_SECRET } = process.env;

const slackEvents = eventsApi.createEventAdapter(SLACK_SIGNING_SECRET);

// const { WebClient, LogLevel } = require('@slack/web-api');

console.log(SLACK_SIGNING_SECRET);
app.use('/', slackEvents.expressMiddleware());

slackEvents.on('app_mention', mentionHandler);
slackEvents.on('error', (e) => console.log('error', e));

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
