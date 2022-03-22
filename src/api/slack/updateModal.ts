
import {ViewsUpdateArguments} from '@slack/web-api';
import {slackClient} from '../slackClient';


const updateModal = async (updateObject : ViewsUpdateArguments) => {
  try {
    // Call the views.open method using the WebClient passed to listeners
    const result = await slackClient.views.update(updateObject);

    return result;
  } catch (error) {
    console.error(error);
  }
};

export default updateModal;
