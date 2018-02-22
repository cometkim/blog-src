import * as React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { Header, MainContainer } from 'components'

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
        <MainContainer>
            <PostContainer>
                <PostBody 
                    className='post-body'
                    dangerouslySetInnerHTML={{ __html: data.post.html }}
                />
            </PostContainer>
        </MainContainer>
    </>
)

const PostContainer = styled.div`
    display: flex;
    justify-content: center;
`

const PostBody = styled.article`
    max-width: ${theme.contentMaxWidth};
    padding: 0 ${theme.contentSidePadding};
`

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        post: markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
        }
    }
`
