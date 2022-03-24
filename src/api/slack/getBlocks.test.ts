import {getBlocks} from './getBlocks';

describe('getBlock', () => {
  it('is successfult', async () => {
    expect(await getBlocks('C02R6P88K7E', '1648090808.604049'))
      .toMatchSnapshot();
  });
});
