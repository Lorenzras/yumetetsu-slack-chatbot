

import {saveSlackInputToKintone} from './normalHankyo/lib';
import {openHankyoFormModal} from './normalHankyo/openHankyoFormModal';
import {callbackIds} from '../../api/slack/ids';

import {
  updateKintone,
} from './longtermHankyo/handleSubmissions/updateKintone';

import {confirmAssignment} from './longtermHankyo';


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
      await updateKintone(payload, {
        isNotActive: {value: '1'},
      });
      break;
    case callbackIds.actOnLtHankyo: // Assign agent
      await confirmAssignment(payload);
      break;
  }
};

export default handleViewSubmission;
