import double from "../../src/defaultExport/double";

describe('spy export default', () => {
  let spy: jest.SpyInstance

  beforeAll(() => {
    const org = require('../../src/exportDefault/double')
    spy = jest.spyOn(org, org.default(2), null)
  })

  afterEach(() => {
    // 毎回テストごとに盗聴した入出力情報をリセットする
    spy.mockClear();
  });

  test('double', () => {
    expect(double(2))
  })
})
