require('dotenv').config();

import express from 'express';
import testRouter from './routes/test';
import slackRouter from './routes/slack';

const app = express();
const PORT = process.env.PORT || 3001;

// json parser will return empty body.
// I used the following instead but it was not in slack documentation. :D
// app.use(bodyParser.urlencoded({extended: true}));

app.use('/test', testRouter);
app.use('/slack', slackRouter);


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

