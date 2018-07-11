import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from 'components/layout'

import {
    Header,
    TagList,
    Footer,
} from 'components'

import theme from 'utils/theme'

export default ({
    data: {
        allMarkdownRemark,
        site: {
            siteMetadata
        }
    }
}: SiteData & AllMarkdownRemarkData) => (
    <Layout>
        <Header fixed title={siteMetadata.title} />
        <Container>
            <Summary>{allMarkdownRemark.group.length}개의 태그가 있습니다.</Summary>
            <TagList tags={allMarkdownRemark.group
                .map(group => group.fieldValue)
            }/>
        </Container>
        <Footer owner={siteMetadata.owner.name} />
    </Layout>
)

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${theme.headerHeight};
    padding-left: ${theme.contentSidePadding};
    padding-right: ${theme.contentSidePadding};
`

const Summary = styled.div`
    font-size: 1.25rem;
    margin: ${theme.contentSpacing} 0;
`

export const pageQuery = graphql`
    query AllTagQuery {
        site {
            siteMetadata {
                title
                owner {
                    name
                }
            }
        }
        allMarkdownRemark(
            filter: { frontmatter: { tags: { ne: null } } }
        ){
            group(
                field: frontmatter___tags
            ){
                fieldValue
                totalCount
            }
        }
    }
`
