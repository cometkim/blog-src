import * as React from 'react'

const mapMarkdownRemarkToContext = ({ excerpt, frontmatter }: MarkdownRemark) => ({ excerpt, ...frontmatter })

export const injectAllMarkdownRemark = (src: any) => ({ data }: { data: { allMarkdownRemark: AllMarkdownRemark } }) => {
    const props = data.allMarkdownRemark.edges
        .map(edge => edge.node)
        .map(mapMarkdownRemarkToContext)
    
    return React.createElement(src, { props })
}
