import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import {
    Header,
    PostCardList,
    Footer,
} from 'components'

import theme from 'utils/theme'

type Context = {
    pathContext: {
        tag: string,
    },
}

export default ({
    pathContext: {
        tag,
    },
    data,
    data: {
        site: {
            siteMetadata: {
                title,
                owner,
            },
        },
        allMarkdownRemark: {
            edges
        }
    },
}: Context & SiteData & AllMarkdownRemarkData) => (
    <>
        <Header fixed title={title} />
        <Container>
            <SeriesSummary>{tag}: {edges.length}개의 글이 있습니다.</SeriesSummary>
            <PostCardList data={data}/>
        </Container>
        <Footer owner={owner.name} />
    </>
)

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: ${theme.headerHeight};
`

const SeriesSummary = styled.div`
    font-size: 1.3rem;
    margin-top: ${theme.contentSpacing};
    padding: 0 ${theme.contentSidePadding};
`

export const pageQuery = graphql`
    query TagQuery($tag: String!) {
        site {
            siteMetadata {
                title
                owner {
                    name
                }
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { eq: $tag } } }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt
                    frontmatter {
                        title
                        author
                        date(formatString: "YYYY년 M월 D일")
                        tags
                    }
                }
            }
        }
    }
`
