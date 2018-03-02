import * as React from 'react'
import styled from 'styled-components'

import {
    Header,
    PostInfo,
    PostBody,
    PostLicenseInfo,
    Footer,
} from 'components'

import theme from 'utils/theme'
import 'prismjs/themes/prism.css'

type BlogPostProps = SiteData & MarkdownRemarkData

export default ({ data }: BlogPostProps) => (
    <>
        <Header title={data.site.siteMetadata.title} />
        <Container>
            <PostContainer>
                <PostMetaData>
                    <PostTitle>{data.markdownRemark.frontmatter.title}</PostTitle>
                    <PostInfo {...data.markdownRemark.frontmatter}/>
                </PostMetaData>
                <PostBody
                    dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                />
                <PostLicenseInfo />
            </PostContainer>
        </Container>
        <Footer owner={data.site.siteMetadata.owner.name} />
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

const PostMetaData = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.contentSpacing} 0;
    margin-top: ${theme.contentSpacing};
    border: 1px solid ${theme.grayColor};
`

const PostTitle = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`

export const pageQuery = graphql`
    query BlogPostByPath($slug: String!) {
        site {
            siteMetadata {
                title
                owner {
                    name
                }
            }
        }

        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                author
                title
                date(formatString: "YYYY년 M월 D일")
                tags
            }
        }
    }
`
