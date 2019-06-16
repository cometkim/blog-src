import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useSiteMetadata } from 'hooks/use-site-metadata'

import {
    Layout,
    Header,
    Footer,
} from 'components'

const AboutPage: React.FC = () => {
    const siteMetadata = useSiteMetadata()
    return (
        <Layout>
            <Header fixed title={siteMetadata.title} />
            <Footer owner={siteMetadata.owner.name} />
        </Layout>
    )
}

export default AboutPage
