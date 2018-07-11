import * as React from 'react'
import { graphql } from 'gatsby'

import {
    Header,
    Footer,
} from 'components'

type AboutPageProps = SiteData

export default ({ data }: AboutPageProps) => (
    <>
        <Header fixed title={data.site.siteMetadata.title} />
        <Footer owner={data.site.siteMetadata.owner.name} />
    </>
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
