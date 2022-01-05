// slackRouter.js

// import {createEventAdapter} from "@slack/events-api"
import {Router as router} from 'express';
import mentionHandler
  from '../controllers/slackEvents/mention/mentionHandler';

import slackEvents from '../middlewares/slack';
import pushMessage from '../controllers/slackEvents/mention/pushMessage';
import hankyoButtonClicked
  from '../controllers/slackEvents/interaction/hankyoButtonClicked';


const route = router();

route.get('/webhook/test', pushMessage);
route.use('/webhook', slackEvents.expressMiddleware());
slackEvents.on('app_mention', mentionHandler);
slackEvents.on('error', (e : Error) => console.log('error', e));

route.post('/interactive-endpoint', hankyoButtonClicked);


export default route;
