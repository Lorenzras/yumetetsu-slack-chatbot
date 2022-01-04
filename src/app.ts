/* const client = new WebClient(SLACK_BOT_TOKEN, {
  logLevel: LogLevel.DEBUG,
}); */

require('dotenv').config();
import express from "express"
import {createEventAdapter} from "@slack/events-api"
import mentionHandler from "./controllers/slackEvents/mention/mentionHandler";
import testRouter from "./routes/test"
import slackRouter from "./routes/slack"

const app = express();
const PORT = process.env.PORT || 3000;
const { SLACK_SIGNING_SECRET } = process.env;

//const slackEvents = createEventAdapter(SLACK_SIGNING_SECRET as string);

// const { WebClient, LogLevel } = require('@slack/web-api');

app.use('/test', testRouter)
app.use("/slack", slackRouter)
//app.use('/', slackEvents.expressMiddleware());


//slackEvents.on('app_mention', mentionHandler);

//slackEvents.on('error', (e : Error) => console.log('error', e));

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
