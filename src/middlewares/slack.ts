import {createEventAdapter} from "@slack/events-api"


const { SLACK_SIGNING_SECRET } = process.env;
const slackEvents = createEventAdapter(SLACK_SIGNING_SECRET as string);

export default slackEvents
