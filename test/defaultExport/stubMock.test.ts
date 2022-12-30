import doubleSquare from '../../src/defaultExport/doubleSquare'
import double from '../../src/defaultExport/double'
import assert from "assert";
jest.mock('../../src/defaultExport/double')

describe('stub export default function with jest.mock', () => {
  beforeAll(() => {
    // doubleの返り値を、2に変更する
    (double as jest.Mock).mockReturnValue(6)
  })

  afterAll(() => {
    (double as jest.Mock).mockClear()
  })

  it('返り値は、6になる', () => {
    const actual = doubleSquare(3)
    assert.equal(actual, 6)
  })
})
