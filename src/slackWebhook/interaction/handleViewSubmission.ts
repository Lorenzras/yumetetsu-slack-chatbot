import {InteractionPayload} from '../../types/slack';
import {HANKYO_TAIOU, HANKYO_TAIOU_SEND} from '../../UTIL/constants';
import saveSlackInputToKintone from '../../api/kintone/saveSlackInputToKintone';
import {openHankyoFormModal} from './normalHankyo/openHankyoFormModal';


const handleViewSubmission = async (payload: InteractionPayload) => {
  const callBackId = payload.view.callback_id;

  switch (callBackId) {
    case HANKYO_TAIOU:
      await openHankyoFormModal(payload);
      return;
    case HANKYO_TAIOU_SEND:
      console.log(payload.view.state, 'Submitted');
      await saveSlackInputToKintone(payload);
      return;
  }
};

export default handleViewSubmission;
