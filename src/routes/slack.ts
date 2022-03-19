
import {Router as router} from 'express';
import mentionHandler
    from '../controllers/slackEvents/mention/mentionHandler';

import slackEvents from '../middlewares/slack';
import pushMessage from '../controllers/slackEvents/mention/pushMessage';

import interaction from '../controllers/slackEvents/interaction/interaction';
import bodyParser from 'body-parser';


const route = router();

// json parser will return empty body.
// I used the following instead but it was not in slack documentation. :D
route.use(bodyParser.urlencoded({extended: true}));

route.get('/webhook/test', pushMessage);
route.use('/webhook', slackEvents.expressMiddleware());
slackEvents.on('app_mention', mentionHandler);
slackEvents.on('error', (e : Error) => console.log('error', e));

route.post('/interactive-endpoint', interaction);


export default route;
