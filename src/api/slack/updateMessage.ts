
import {ChatUpdateArguments} from '@slack/web-api';
import {slackClient} from '../slackClient';


export const updateMessage = async (updateObject : ChatUpdateArguments) => {
  try {
    const result = await slackClient.chat.update(updateObject);

    return result;
  } catch (error) {
    console.error(error);
  }
};

