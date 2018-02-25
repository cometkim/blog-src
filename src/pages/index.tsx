import * as React from 'react'
import styled from 'styled-components'

import {
    Header,
    PostCardList
} from 'components'

import theme from 'utils/theme'

export type IndexPageProps = SiteData & AllMarkdownRemarkData

export default ({ data }: IndexPageProps) => (
    <>
        <Header fixed title={data.site.siteMetadata.title} />
        <Container>
            <PostCardList data={data}/>
        </Container>
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
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
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
