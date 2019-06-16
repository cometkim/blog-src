import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import theme from 'utils/theme'

import PostInfo from './post-info'

export interface PostCardProps {
    slug: string
    title: string
    author: string
    date: string
    tags: Array<string>
    excerpt: string
    series?: string
}

const Container = styled.div`
    overflow: hidden;
    max-width: ${theme.contentMaxWidth};
`

const GoToPost = styled(Link)`
    color: ${theme.blackColor};
`

const Title = styled.h3`
    margin-bottom: 0;
`

const Excerpt = styled.p`
    font-weight: 200;
`

const PostCard: React.FC<PostCardProps> = ({
    slug,
    title,
    author,
    date,
    tags,
    excerpt,
    series,
}) => (
    <Container>
        <GoToPost to={slug}>
            <Title>{title}</Title>
            <Excerpt>{excerpt}</Excerpt>
        </GoToPost>
        <PostInfo author={author} date={date} tags={tags} series={series} />
    </Container>
)

export default PostCard
