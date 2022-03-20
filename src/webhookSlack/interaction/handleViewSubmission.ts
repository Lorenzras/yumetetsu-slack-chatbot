

import {saveSlackInputToKintone} from './normalHankyo/lib';
import {openHankyoFormModal} from './normalHankyo/openHankyoFormModal';
import {callbackIds} from '../../api/slack/ids';
import {stopNotify} from './longtermHankyo/handleSubmissions/stopNotify';


const handleViewSubmission = async (payload: InteractionPayload) => {
  const callBackId = payload.view.callback_id;

  switch (callBackId) {
    /* Regular hankyo */
    case callbackIds.hankyoFormOpen:
      await openHankyoFormModal(payload);
      break;
    case callbackIds.hankyoSubmit:
      await saveSlackInputToKintone(payload);
      break;
    /* Longterm Customers */
    case callbackIds.stopNotify:
      await stopNotify(payload);
      break;
  }
};

export default handleViewSubmission;
