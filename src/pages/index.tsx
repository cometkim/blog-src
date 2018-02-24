import * as React from 'react'
import styled from 'styled-components'

import {
    Header,
    PostCardList
} from 'components'

import config from 'site-config'
import theme from 'utils/theme'

type IndexPageProps = AllMarkdownRemarkData

export default ({ data }: IndexPageProps) => (
    <>
        <Header fixed title={config.title} />
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
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    internal {
                        contentDigest
                    }
                    excerpt
                    frontmatter {
                        path
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
