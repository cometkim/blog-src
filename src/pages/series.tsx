import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { useSiteMetadata } from 'hooks/use-site-metadata'
import theme from 'utils/theme'

import {
    Layout,
    Header,
    SeriesCard,
    Footer,
} from 'components'

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${theme.headerHeight};
`

const Summary = styled.div`
    font-size: 1.25rem;
    font-weight: 500;
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

const SeriesPage: React.FC = () => {
    const siteMetadata = useSiteMetadata()
    const data = useStaticQuery<AllMarkdownRemarkData>(graphql`
        query AllSeriesQuery {
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
    `)
    return (
        <Layout>
            <Header fixed title={siteMetadata.title} />
            <Container>
                <Summary>{data.allMarkdownRemark.group.length}개의 시리즈가 있습니다.</Summary>
                <SeriesList>
                    {data.allMarkdownRemark.group.map(group => (
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
        </Layout>
    )
}

export default SeriesPage
