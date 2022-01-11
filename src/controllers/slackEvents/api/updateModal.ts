
import {ViewsUpdateArguments} from '@slack/web-api';
import slackApp from '../../../service/slackApp';


const updateModal = async (updateObject : ViewsUpdateArguments) => {
    try {
    // Call the views.open method using the WebClient passed to listeners
        const result = await slackApp.client.views.update(updateObject);

        return result;
    } catch (error) {
        console.error(error);
    } ;
};

export default updateModal;
