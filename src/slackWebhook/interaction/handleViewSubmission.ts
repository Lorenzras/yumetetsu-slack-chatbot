import {InteractionPayload} from '../../types/slack';
// import {HANKYO_TAIOU, HANKYO_TAIOU_SEND} from '../../utils/constants';
import {saveSlackInputToKintone} from './normalHankyo/lib/';
import {openHankyoFormModal} from './normalHankyo/openHankyoFormModal';
import {callbackIds} from '../ids';


const handleViewSubmission = async (payload: InteractionPayload) => {
  const callBackId = payload.view.callback_id;

  switch (callBackId) {
    case callbackIds.hankyoFormOpen:
      await openHankyoFormModal(payload);
      return;
    case callbackIds.hankyoSubmit:
      await saveSlackInputToKintone(payload);
      return;
  }
};

export default handleViewSubmission;
