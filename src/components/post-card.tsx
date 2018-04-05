import * as React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import PostInfo from './post-info'

import theme from 'utils/theme'

export interface PostCardProps {
    slug: string
    title: string
    author: string
    date: string
    tags: string[]
    excerpt: string
    series?: string
}

export default ({ slug, title, author, date, tags, excerpt, series }: PostCardProps) => (
    <Container>
        <GoToPost to={slug}>
            <Title>{title}</Title>
            <Excerpt>{excerpt}</Excerpt>
        </GoToPost>
        <PostInfo author={author} date={date} tags={tags} series={series} />
    </Container>
)

const Container = styled.div`
    overflow: hidden;
    max-width: ${theme.contentMaxWidth};
`

const GoToPost = styled(Link) `
    color: ${theme.blackColor};
`

const Title = styled.h3`
    margin-bottom: 0;
`

const Excerpt = styled.p`
    font-weight: 200;
`
