import doubleSquare from "../../src/defaultExport/doubleSquare"
const assert = require('assert')

describe('spy export default', () => {
  let spy: jest.SpyInstance

  beforeAll(() => {
    const double = require('../../src/defaultExport/double')
    // @ts-ignore
    spy = jest.spyOn(double, 'default')
  })

  afterEach(() => {
    // 毎回テストごとに盗聴した入出力情報をリセットする
    spy.mockClear();
  });

  it('呼び出されるのは1回', () => {
    const actual = doubleSquare(2)
    // spy.mock.callsは呼び出した回数分の引数の情報がはいる
    // lengthを使えば、何回呼び出されたのかがわかる
    assert.equal(spy.mock.calls.length, 1)
  });
})
