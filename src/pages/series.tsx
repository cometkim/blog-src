import * as React from 'react'
import styled from 'styled-components'

import {
    Header,
    SeriesCard,
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
    <>
        <Header fixed title={siteMetadata.title} />
        <Container>
            <Summary>{allMarkdownRemark.group.length}개의 시리즈가 있습니다.</Summary>
            <SeriesList>
                {allMarkdownRemark.group.map(group => (
                    <SeriesItem>
                        <SeriesCard 
                            name={group.fieldValue}
                            count={group.totalCount}
                        />
                    </SeriesItem>
                ))}
            </SeriesList>
        </Container>
        <Footer owner={siteMetadata.owner.name} />
    </>
)

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${theme.headerHeight};
`

const Summary = styled.div`
    font-size: 1.25rem;
    margin: ${theme.contentSpacing} 0;
`

const SeriesList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const SeriesItem = styled.li`
    margin: 0;
    padding: 0 ${theme.contentSidePadding};
    padding-bottom: 1.75rem;
`

export const pageQuery = graphql`
    query SeriesQuery {
        site {
            siteMetadata {
                title
                owner {
                    name
                }
            }
        }
        allMarkdownRemark(
            filter: { fields: { series: { ne: null } } }
        ){
            group(
                field: fields___series
            ){
                fieldValue
                totalCount
            }
        }
    }
`
