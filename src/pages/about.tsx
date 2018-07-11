import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/layout'

import {
    Header,
    Footer,
} from 'components'

type AboutPageProps = SiteData

export default ({ data }: AboutPageProps) => (
    <Layout>
        <Header fixed title={data.site.siteMetadata.title} />
        <Footer owner={data.site.siteMetadata.owner.name} />
    </Layout>
)

export const pageQuery = graphql`
    query AboutQuery {
        site {
            siteMetadata {
                title
                owner {
                    name
                }
            }
        }
    }
`
