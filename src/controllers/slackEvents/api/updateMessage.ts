
import {ChatUpdateArguments} from '@slack/web-api';
import slackApp from '../../../service/slackApp';


const updateMessage = async (updateObject : ChatUpdateArguments) => {
    try {
        const result = await slackApp.client.chat.update(updateObject);

        return result;
    } catch (error) {
        console.error(error);
    } ;
};

export default updateMessage;
