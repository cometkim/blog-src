import React from 'react'
import { useStaticQuery } from 'gatsby'
import { render, cleanup } from '@testing-library/react'

import IndexPage from './index'

jest.mock('hooks/use-site-metadata')

describe('page/IndexPage', () => {
    afterEach(cleanup)

    it('should render properly', () => {
        // @ts-ignore
        useStaticQuery.mockReturnValueOnce({
            allMarkdownRemark: {
                edges: [
                    {
                        node: {
                            frontmatter: {
                                title: '제목',
                                author: '작성자',
                                date: 'YYYY년 MM월 DD일',
                                tags: ['a', 'b', 'c']
                            },
                            fields: {
                                slug: '/slug/',
                                series: '시리즈',
                            },
                            excerpt: '요약',
                        },
                    }
                ],
            },
        })

        const { container } = render(<IndexPage/>)
        expect(container).toMatchSnapshot()
    })
})
