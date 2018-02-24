import * as React from 'react'
import styled from 'styled-components'

import {
    Header,
    PostBody,
    PostLicenseInfo
} from 'components'

import theme from 'utils/theme'
import 'prismjs/themes/prism.css'

interface BlogPostProps {
    data: {
        post: MarkdownRemark
    }
}

export default ({ data }: BlogPostProps) => (
    <>
        <Header title='< Home'/>
        <Container>
            <PostContainer>
                <PostBody
                    dangerouslySetInnerHTML={{ __html: data.post.html }}
                />
                <PostLicenseInfo />
            </PostContainer>
        </Container>
    </>
)

const Container = styled.main`
    display: flex;
    justify-content: center;
`

const PostContainer = styled.div`
    overflow: auto;
    max-width: ${theme.contentMaxWidth};
    padding: 0 ${theme.contentSidePadding};
    padding-top: ${theme.headerHeight};
    box-shadow: 0 0 120px rgba(0, 0, 0, .1);
`

export const pageQuery = graphql`
    query BlogPostByPath($slug: String!) {
        post: markdownRemark(fields: { slug: { eq: $slug } }) {
            html
        }
    }
`
