import * as React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { Header } from 'components'

import theme from 'utils/theme'

import './post.scss'
import 'prismjs/themes/prism.css'

interface BlogPostProps {
    data: {
        post: MarkdownRemark
    }
}

export default ({ data }: BlogPostProps) => (
    <>
        <Header title='< Home'/>
        <PostContainer>
            <PostBody
                className='post-body'
                dangerouslySetInnerHTML={{ __html: data.post.html }}
            />
        </PostContainer>
    </>
)

const PostContainer = styled.main`
    display: flex;
    justify-content: center;
`

const PostBody = styled.article`
    max-width: ${theme.contentMaxWidth};
    padding: 0 ${theme.contentSidePadding};
    padding-top: ${theme.headerHeight};
    box-shadow: 0 0 120px rgba(0, 0, 0, .1);
`

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        post: markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
        }
    }
`
