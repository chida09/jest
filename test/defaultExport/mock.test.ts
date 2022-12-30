import doubleSquare from "../../src/defaultExport/doubleSquare"
import double from "../../src/defaultExport/double"
import assert from "assert"

jest.mock('../../src/defaultExport/double', () => {
  const originalModule = jest.requireActual('../../src/defaultExport/double')

  return {
    __esModule: true,
    default: jest.fn().mockImplementation(originalModule.default)
  }
})

describe('jest.mockを使ったexport defaultの検証', () => {
  afterEach(() => {
    // doubleはmockされていても、importしたときの情報しかもたないので、
    // mockメソッドを使用するには、jest.Mockにキャストが必要
    (double as jest.Mock).mockClear()
  })

  it('doubleが呼び出されるのは1回', () => {
    const actual = doubleSquare(3)
    // .mock.callsは呼び出した回数分の引数の情報がはいる
    // lengthを使えば、何回呼び出されたのかがわかる
    assert.equal((double as jest.Mock).mock.calls.length, 1)
  })

  it('doubleの引数は3である', () => {
    const actual = doubleSquare(3)
    // .mock.calls[index]でindex回目の引数情報にアクセスできる
    assert.equal((double as jest.Mock).mock.calls[0], 3)
  })

  it('double処理は正常終了し、例外をなげない', () => {
    const actual = doubleSquare(3)
    // .mock.resultsは、mock対象の出力情報を配列管理している
    // [0]ではじめに呼び出されたときの出力情報にアクセスでき, typeでそれが正常終了, 異常終了などを判定できる
    assert.equal((double as jest.Mock).mock.results[0].type, 'return')
  })

  it('doubleのreturn値は3を2倍した6である', () => {
    const actual = doubleSquare(3)
    // .mock.results[index].valueでindex回目に出力した値にアクセスできる
    assert.equal((double as jest.Mock).mock.results[0].value, 6)
  })

  // spyなのでdouble関数の振る舞いはそのまま反映されることを確認
  it('doubleSquareの戻り値は、2 * 3 で6になる', () => {
    const actual = doubleSquare(3)
    assert.equal(actual, 6)
  })
})
