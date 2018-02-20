import * as React from 'react'

import { PostCardProps } from 'components/post-card'

const mapMarkdownRemarkToContext =
    ({ excerpt, frontmatter }: MarkdownRemark) =>
    ({ excerpt, ...frontmatter } as PostCardProps)

export const injectAllMarkdownRemark =
    (Component: any) =>
    ({ data }: AllMarkdownRemarkData) =>
    <Component props={data.allMarkdownRemark.edges
        .map(edge => edge.node)
        .map(mapMarkdownRemarkToContext)
    }/>
