import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import {
    Header,
    PostCardList,
    Footer,
} from 'components'

import theme from 'utils/theme'

export type IndexPageProps = SiteData & AllMarkdownRemarkData

export default ({ data }: IndexPageProps) => (
    <>
        <Header fixed title={data.site.siteMetadata.title} />
        <Container>
            <PostCardList data={data}/>
        </Container>
        <Footer owner={data.site.siteMetadata.owner.name} />
    </>
)

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${theme.headerHeight}
`

export const pageQuery = graphql`
    query IndexQuery {
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
        ) {
            edges {
                node {
                    fields {
                        slug
                        series
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
