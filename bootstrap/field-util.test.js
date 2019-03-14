const { createFieldUtil } = require('./filed-util')

test('buildSeries()', () => {
    const util = createFieldUtil()

    const result1 = util.buildSeries('/no-series')
    expect(result1).toBeNull()

    const result2 = util.buildSeries('/my-series/post1')
    expect(result2).toEqual('my-series')

    const result3 = util.buildSeries('/my-series/post2/')
    expect(result3).toEqual('my-series')
})
