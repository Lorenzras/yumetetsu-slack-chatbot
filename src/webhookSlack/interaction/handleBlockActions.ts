
// import {HANKYO_TAIOU, HANKYO_TAIOU_CONTENTS} from '../../utils/constants';
import {actionIds} from '../../api/slack/ids';
import {openConfirmStopNotify} from './longtermHankyo/openConfirmStopNotify';
import openHankyoContentsModal from './normalHankyo/openHankyoContentsModal';

import openHankyoTaiouModal from './normalHankyo/openHankyoTaiouModal';


const getActionButton = (payload: InteractionPayload) => {
  /* A block may have multiple actions,
    but for now I still don't see the need to handle multiple action blocks,
    so I'll just get the first one.  */
  return payload
    .actions[0];
};


/**
 * Handles block actions.
 *
 * @param payload slack payload
 */
const handleBlockActions = (payload: InteractionPayload) => {
  const action = getActionButton(payload);
  /**
        Be sure to set actionIds at the client side too.
        The project is getting bigger so I am thinking to
        make actionIds more centralized. For now, I will just manage it at
        **serverConstants.ts -Ras 2022-03-18
    */
  const actionId = action.action_id;

  switch (actionId) {
    /* Regular Hankyo */
    case actionIds.hankyoConfirmOpen:
      openHankyoTaiouModal(action, payload);
      break;
    case actionIds.hankyoContents:
      openHankyoContentsModal(action, payload);
      break;

    /* longterm customers */
    case actionIds.stopNotify:
      openConfirmStopNotify(action, payload);
      break;
  }
};

export default handleBlockActions;
