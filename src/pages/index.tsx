import * as React from 'react'
import styled from 'styled-components'

import { Header, PostCardList } from 'components'

import config from 'site-config'

type IndexPageProps = AllMarkdownRemarkData

export default ({ data }: IndexPageProps) => (
    <>
        <Header title={config.title} />
        <PostCardList data={data}/>
    </>
)

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
