

import {saveSlackInputToKintone} from './normalHankyo/lib';
import {openHankyoFormModal} from './normalHankyo/openHankyoFormModal';
import {callbackIds} from '../../api/slack/ids';

import {confirmAssignment} from './longtermHankyo';
import {ViewSubmitAction} from '@slack/bolt';
import {confirmStopNotify} from './longtermHankyo/handleSubmissions';


const handleViewSubmission = async (payload: ViewSubmitAction) => {
  const callBackId = payload.view.callback_id;
  console.log('HANDLE SUBMISSION', payload);
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
      await confirmStopNotify(payload);
      break;
    case callbackIds.actOnLtHankyo: // Assign agent
      await confirmAssignment(payload);
      break;
  }
};

export default handleViewSubmission;
