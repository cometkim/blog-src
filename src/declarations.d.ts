declare const graphql: (query: TemplateStringsArray) => void

interface IndexPageProps {
    data: {
        allMarkdownRemark: {
            edges: Array<{
                node: {
                    internal: {
                        contentDigest: string
                    }
                    excerpt: string
                    frontmatter: {
                        path: string
                        title: string
                        author: string
                        date: string
                        tags: Array<string>
                    }
                }
            }>
        }
    } 
}
