const {
    redirects,
    creators,
    buildSlug,
    buildSeries,
} = require('gatsby-node')._node

describe('Gatsby Node', () => {
    test('buildSlug', () => {
        const postSlug = '/post'
        const context = {
            node: 'node',
            getNode: 'getNode',
        }
        const createFilePath = jest.fn().mockReturnValue(postSlug)

        const result = buildSlug({ context, createFilePath })
        const expected = {
            context,
            postSlug,
            slug: '/posts' + postSlug,
        }

        expect(createFilePath).toBeCalledWith({ 
            ...expected.context,
            basePath: 'blog-posts/posts',
        })
        expect(result.slug).toEqual(expected.slug)
        expect(result.postSlug).toEqual(expected.postSlug)
    })

    test('buildSeries', () => {
        [
            {
                slug: '/post/',
                expected: null,
            },
            {
                slug: '/series/post/',
                expected: 'series',
            }
        ]
        .forEach(({ slug: postSlug, expected }) => {
            const { series } = buildSeries({ postSlug })
            expect(series).toEqual(expected)
        })
    })
})
