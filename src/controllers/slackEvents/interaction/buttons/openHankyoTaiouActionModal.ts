import {InteractionPayload} from '../../../../types/slack';
import hankyouTaiouConfirmed from '../../../../view/slack/modals/hankyouTaiouConfirmed';
import sendModal from '../modal/sendModal';


const slackPayloadToKintoneRecord = (payload : InteractionPayload) => {
    return {
        slackPIC: {
            value: payload.user.name,
        },
    };
};

const openHankyoTaiouActionModal = (payload: InteractionPayload) => {
    console.log('opening modal: ', payload);

    const viewsOpen = sendModal(payload.trigger_id, hankyouTaiouConfirmed());
};

export default openHankyoTaiouActionModal;
