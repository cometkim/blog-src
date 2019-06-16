import { useStaticQuery, graphql } from 'gatsby'

export function useSiteMetadata() {
    const { site: { siteMetadata } } = useStaticQuery<SiteData>(graphql`
        query SiteMetadataQuery {
            site {
                siteMetadata {
                    siteUrl
                    title
                    description
                    keywords
                    owner {
                        name
                        email
                        github
                        twitter
                        gravatar
                    }
                }
            }
        }
    `)
    return siteMetadata
}
