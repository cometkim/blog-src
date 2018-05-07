const { resolve } = require('path')

const {
    creators,
    redirects,
    buildSlug,
    buildSeries,
} = require('node-utils')

describe('Gatsby Node', () => {
    test('페이지 생성 쿼리 스냅샷', () => {
        creators.forEach(({ id, query })=> expect(query).toMatchSnapshot(id))
    })

    test('페이지 리디렉션 스냅샷', () => {
        redirects.forEach(redirect => expect(redirect).toMatchSnapshot())
    })

    test('포스트 페이지 생성자', () => {
        const slug = '/post'
        const data = {
            posts: {
                edges: [
                    {
                        node: {
                            fields: {
                                slug,
                            },
                        },
                    },
                ],
            },
        }

        const [{ creator }] = creators.filter(c => c.id === 'createPostPages')
        expect(creator).toBeDefined()

        const createPage = jest.fn()
        creator({ data, createPage })
        expect(createPage).toBeCalledWith({
            path: slug,
            component: resolve(__dirname, '../src/templates/post.tsx'),
            context: { slug },
        })
    })

    test('시리즈 페이지 생성자', () => {
        const series = 'Series'
        const data = {
            posts: {
                group: [
                    {
                        series
                    },
                ],
            },
        }

        const [{ creator }] = creators.filter(c => c.id === 'createSeriesPages')
        expect(creator).toBeDefined()

        const createPage = jest.fn()
        creator({ data, createPage })
        expect(createPage).toBeCalledWith({
            path: `/series/${series}`,
            component: resolve(__dirname, '../src/templates/series.tsx'),
            context: { series },
        })
    })

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
            },
        ]
        .forEach(({ slug: postSlug, expected }) => {
            const { series } = buildSeries({ postSlug })
            expect(series).toEqual(expected)
        })
    })
})
