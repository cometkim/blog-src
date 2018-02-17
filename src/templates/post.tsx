import * as React from 'react'

import styled from 'styled-components'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

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
    <React.Fragment>
        <Header title='< Home'/>
        <Container>
            <PostBody 
                className='post-body'
                dangerouslySetInnerHTML={{ __html: data.post.html }}
            />
        </Container>
    </React.Fragment>
)

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const PostBody = styled.div`
    max-width: ${theme.contentMaxWidth};
`

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        post: markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
        }
    }
`
