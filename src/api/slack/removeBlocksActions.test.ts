import {removeBlocksActions} from './removeBlocksActions';

describe('removeActionsFromBlocks', () => {
  it('is successfull', async () => {
    expect(await removeBlocksActions('C02R6P88K7E', '1648092644.383499'))
      .toMatchSnapshot();
  });
});
