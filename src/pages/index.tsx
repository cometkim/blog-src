import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { useSiteMetadata } from 'hooks/use-site-metadata'
import theme from 'utils/theme'

import {
    Layout,
    Header,
    PostCardList,
    Footer,
} from 'components'

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${theme.headerHeight};
`

const IndexPage: React.FC = () => {
    const siteMetadata = useSiteMetadata()
    const data = useStaticQuery<AllMarkdownRemarkData>(graphql`
        query IndexPageQuery {
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
    `)

    const posts = data.allMarkdownRemark.edges
        .map(edge => edge.node)
        .map(({ frontmatter, fields, excerpt }) => ({
            ...frontmatter,
            ...fields,
            excerpt,
        }))

    return (
        <Layout>
            <Header fixed title={siteMetadata.title} />
            <Container>
                <PostCardList posts={posts}/>
            </Container>
            <Footer owner={siteMetadata.owner.name} />
        </Layout>
    )
}

export default IndexPage
