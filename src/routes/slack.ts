// slackRouter.js

//import {createEventAdapter} from "@slack/events-api"
import mentionHandler from "../controllers/slackEvents/mention/mentionHandler";

import { Router } from "express";
import slackEvents from "../middlewares/slack";
import pushMessage from "../controllers/slackEvents/mention/pushMessage";

//const { SLACK_SIGNING_SECRET } = process.env;
const router = Router()
//const slackEvents = createEventAdapter(SLACK_SIGNING_SECRET as string);


//console.log(SLACK_SIGNING_SECRET)

router.get("/webhook/test", pushMessage)

router.use('/webhook', slackEvents.expressMiddleware());
slackEvents.on('app_mention', mentionHandler);
slackEvents.on('error', (e : Error) => console.log('error', e));



export default router;