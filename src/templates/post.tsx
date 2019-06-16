import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { useSiteMetadata } from 'hooks/use-site-metadata';
import theme from 'utils/theme'
import {
    Layout,
    Header,
    PostInfo,
    PostBody,
    PostLicenseInfo,
    Utteranc,
    Footer,
    SiteHelmet,
} from 'components'

interface PostPageTemplateProps {
    data: MarkdownRemarkData
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

const PostMetaData = styled.div`
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

const PostPageTemplate: React.FC<PostPageTemplateProps> = ({ data }) => {
    const siteMetadata = useSiteMetadata()
    const post = {
        ...data.markdownRemark,
        ...data.markdownRemark.fields,
        ...data.markdownRemark.frontmatter,
    }
    return (
        <Layout>
            <SiteHelmet 
                url={`${siteMetadata.siteUrl}${post.slug}`}
                title={`${siteMetadata.title} - ${post.title}`}
                description={post.excerpt}
                owner={siteMetadata.owner}
                keywords={post.tags}
            />
            <Header title={siteMetadata.title} />
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
            <Footer owner={siteMetadata.owner.name} />
        </Layout>
    )
}

export default PostPageTemplate

export const pageQuery = graphql`
    query BlogPostByPath($slug: String!) {
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
