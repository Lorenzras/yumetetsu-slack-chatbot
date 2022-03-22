import {View} from '@slack/types';
import {slackClient} from '../slackClient';


export const sendModal = async (triggerId :string, view: View) => {
  try {
    // Call the views.open method using the WebClient passed to listeners
    const result = await slackClient.views.open({
      trigger_id: triggerId,
      view,
    });

    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

