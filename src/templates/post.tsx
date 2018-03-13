import * as React from 'react'
import styled from 'styled-components'

import {
    Header,
    PostInfo,
    PostBody,
    PostLicenseInfo,
    Utteranc,
    Footer,
    SiteHelmet,
} from 'components'

import theme from 'utils/theme'
import 'prismjs/themes/prism.css'

type BlogPostProps = SiteData & MarkdownRemarkData

export default ({ data }: BlogPostProps) => {
    const {
        siteUrl,
        title: siteTitle,
        owner
    } = data.site.siteMetadata

    const post = {
        ...data.markdownRemark,
        ...data.markdownRemark.fields,
        ...data.markdownRemark.frontmatter,
    }

    return (
        <>
            <SiteHelmet 
                url={`${siteUrl}${post.slug}`}
                title={`${siteTitle} - ${post.title}`}
                description={post.excerpt}
                author={owner}
                keywords={post.tags}
            />
            <Header title={siteTitle} />
            <Container>
                <PostContainer>
                    <PostMetaData>
                        <PostTitle>{post.title}</PostTitle>
                        <PostInfo {...post} />
                    </PostMetaData>
                    <PostBody
                        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                    />
                    <PostLicenseInfo />
                    <Utteranc
                        repo='cometkim/blog-posts'
                        branch='master'
                        issueTerm='pathname'
                    />
                </PostContainer>
            </Container>
            <Footer owner={owner.name} />
        </>
    )
}

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
    padding: ${theme.contentSpacing} ${theme.contentSidePadding};
    margin-top: ${theme.contentSpacing};
    border: 1px solid ${theme.grayColor};
`

const PostTitle = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`

export const pageQuery = graphql`
    query BlogPostByPath($slug: String!) {
        site {
            siteMetadata {
                siteUrl
                title
                owner {
                    name
                    email
                }
            }
        }

        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            excerpt
            fields {
                slug
                series
            }
            frontmatter {
                author
                title
                date(formatString: "YYYY년 M월 D일")
                tags
            }
        }
    }
`
