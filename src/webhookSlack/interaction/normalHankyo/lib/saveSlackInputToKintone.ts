

import {
  blockIds,
} from '../config';
import {updateRecord} from '../../../../api/kintone/';
import {actionIds} from '../../../../api/slack';


export const saveSlackInputToKintone = async (payload : InteractionPayload) => {
  const kintoneRecordId = JSON.parse(payload.view.private_metadata);
  const values = payload.view.state.values;

  console.log('VALUES', values);
  const {
    mail,
    actionType,

    note,
  } = blockIds;

  const {
    multiline,
    checkboxes,
  } = actionIds;

  // メール内容
  const mailBody = values[mail][multiline];


  // 対応事項
  const blockTaiouJiko = values[actionType];
  const inputCheckBoxes = blockTaiouJiko[checkboxes];
  const selectedOptions = inputCheckBoxes
    .selected_options ?
    inputCheckBoxes
      .selected_options.map(({value}) => value) :
    [];


  // 備考
  const blockBiko = values[note];
  const inputBiko = blockBiko[multiline];


  const record : KintoneHankyoRecord = {
    taiouJiko: {value: selectedOptions || []},
    biko: {value: inputBiko.value ?? ''},
    main: {value: mailBody.value ?? ''},
  };

  const updateResult = await updateRecord(
    {...kintoneRecordId, record},
  );

  console.log(updateResult);
};


