declare const graphql: (query: TemplateStringsArray) => void

declare interface SiteData {
    data: {
        site: {
            siteMetadata: SiteMetadata
        }
    }
}

declare interface AllMarkdownRemarkData {
    data: {
        allMarkdownRemark: AllMarkdownRemark
    }
}

declare interface SiteMetadata {
    siteUrl: string
    owner: SiteOwner
    title: string
    description: string
    keywords: string[]
}

declare interface SiteOwner {
    name: string
    email: string
    github: string
    twitter: string
    gravatar: string
}

declare interface AllMarkdownRemark {
    edges?: Array<MarkdownRemarkEdge>
}

declare interface MarkdownRemarkEdge {
    node?: MarkdownRemark
}

declare interface MarkdownRemark {
    id?: string
    fileAbsoultePath?: string
    html?: string
    excerpt?: string
    internal?: MarkdownRemarkInternal
    fields?: Fields
    frontmatter?: Frontmatter
}

declare interface MarkdownRemarkInternal {
    content?: string
    contentDigest?: string
    type?: 'MarkdownRemark'
    owner?: 'gatsby-transformer-remark'
}

declare interface Frontmatter {
    title?: string
    author?: string
    date?: string
    tags?: Array<string>
    draft?: boolean
}

declare interface Fields {
    slug: string
}