
import {Router as router} from 'express';

import slackEvents from '../middlewares/slack';
import pushMessage from '../api/slack/pushMessage';

import interaction from '../slackWebhook/interaction/interaction';
import bodyParser from 'body-parser';


const route = router();

// json parser will return empty body.
// I used the following instead but it was not in slack documentation. :D
route.use(bodyParser.urlencoded({extended: true}));

route.get('/webhook/test', pushMessage);
route.use('/webhook', slackEvents.expressMiddleware());

/* Socket method. */
/* slackEvents.on('app_mention', mentionHandler);
slackEvents.on('error', (e : Error) => console.log('error', e)); */

route.post('/interactive-endpoint', interaction);


export default route;
