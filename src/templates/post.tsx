import * as React from 'react'

import Link from 'gatsby-link'
import Helmet from 'react-helmet'

interface BlogPostProps {
    data: {
        post: {
            html: string
            frontmatter: {
                path: string
                title: string
            }
        }
    }
}

export default ({ data }: BlogPostProps) => {
    const { post } = data

    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        post: markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`
