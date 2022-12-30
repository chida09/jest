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

  it('引数は、3である', () => {
    const actual = doubleSquare(3);
    // spy.mock.calls[index]でindex回目の引数情報にアクセスできる
    assert.equal(spy.mock.calls[0], 3);
  });

  it('処理は正常終了し、例外をなげない', () => {
    const actual = doubleSquare(3);
    // spy.mock.resultsは、spy対象の出力情報を配列管理している
    // [0]ではじめに呼び出されたときの出力情報にアクセスでき, typeでそれが正常終了, 異常終了などを判定できる
    assert.equal(spy.mock.results[0].type, 'return');
  });

  it('return値は3である', () => {
    const actual = doubleSquare(3);
    // spy.mock.results[index].valueでindex回目に出力した値にアクセスできる
    assert.equal(spy.mock.results[0].value, 6);
  });

  it('doubleSquareの戻り値は、2 * 3で6になる', () => {
    const actual = doubleSquare(3);
    assert.equal(actual, 6);
  });
})
