import * as React from 'react'

import styled from 'styled-components'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from 'components/header'

import theme from 'utils/theme'

import 'prismjs/themes/prism.css'

interface BlogPostProps {
    data: {
        post: {
            html: string
            frontmatter: {
                path: string
                title: string
            }
        }
    }
}

export default ({ data }: BlogPostProps) => (
    <Container>
        <PostBody dangerouslySetInnerHTML={{ __html: data.post.html }} />
    </Container>
)

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const PostBody = styled.div`
    max-width: ${theme.contentMaxWidth};

    p {
        font-size: 17px;
    }

    blockquote {
        position: relative;
        color: #999;
        margin: 20px 0;
        padding-top: 20px;
        padding-left: 40px;

        &:before {
            content: '\u201C';
            position: absolute;
            top: 0;
            left: 0;
            font-size: 60px;
            font-weight: bold;
        }
    }
`

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        post: markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
            }
        }
    }
`
