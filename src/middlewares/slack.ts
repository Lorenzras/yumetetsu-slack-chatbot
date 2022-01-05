import {createEventAdapter} from '@slack/events-api';
import {SLACK_SIGNING_SECRET} from '../UTIL/constants';


const slackEvents = createEventAdapter(SLACK_SIGNING_SECRET as string);

export default slackEvents;
