import {createEventAdapter} from '@slack/events-api';


/**
 * I am leaning towards webhook.
 * May implement this should advanced features get required
 * @deprecated
 */
const slackEvents = createEventAdapter(
  process.env.SLACK_SIGNING_SECRET as string);

export default slackEvents;
