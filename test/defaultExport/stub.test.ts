import doubleSquare from '../../src/defaultExport/doubleSquare'
import assert from "assert"

// jest.spyOnをつかう
describe('stub export default function with jest.spyOn', () => {
  let spy: jest.SpyInstance
  beforeAll(() => {
    const org = require('../../src/defaultExport/double')
    // spyOn()で返却されるインスタンスにmockReturnValueを使ってスタブにする
    // @ts-ignore
    spy = jest.spyOn(org, 'default').mockReturnValue(6)
  })

  afterAll(() => {
    spy.mockRestore()
  })

  it('戻り値は6になる。', () => {
    const actual = doubleSquare(3)
    assert.equal(actual, 6)
  })
})
