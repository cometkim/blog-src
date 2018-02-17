declare const graphql: (query: TemplateStringsArray) => void

interface AllMarkdownRemark {
    edges?: Array<MarkdownRemarkEdge>
}

interface MarkdownRemarkEdge {
    node?: MarkdownRemark
}

interface MarkdownRemark {
    id?: string
    fileAbsoultePath?: string
    html?: string
    excerpt?: string,
    internal?: MarkdownRemarkInternal
    frontmatter?: Frontmatter
}

interface MarkdownRemarkInternal {
    content?: string
    contentDigest?: string
    type?: 'MarkdownRemark',
    owner?: 'gatsby-transformer-remark'
}

interface Frontmatter {
    title?: string
    path?: string
    author?: string
    date?: string
    tags?: Array<string>
    draft?: boolean
}
