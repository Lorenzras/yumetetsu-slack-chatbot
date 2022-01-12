/* const client = new WebClient(SLACK_BOT_TOKEN, {
  logLevel: LogLevel.DEBUG,
}); */

import express from 'express';
// import { createEventAdapter } from '@slack/events-api';


import testRouter from './routes/test';
import slackRouter from './routes/slack';
import bodyParser from 'body-parser';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// json parser will return empty body.
// I used the following instead but it was not in slack documentation. :D
// app.use(bodyParser.urlencoded({extended: true}));

app.use('/test', testRouter);
app.use('/slack', slackRouter);


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

