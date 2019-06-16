import React from 'react'
import styled from 'styled-components'

import theme from 'utils/theme'

import PostCard, { PostCardProps } from './post-card'

export interface PostCardListProps {
    posts: Array<PostCardProps>
}

const Container = styled.ul`
    list-style: none;
    padding: 0 ${theme.contentSidePadding};
`

const ListItemWrapper = styled.li`
    padding-bottom: 1.75rem;
    border-bottom: 1px solid ${theme.grayColor};
`

const PostCardList: React.FC<PostCardListProps> = ({ posts }) => (
    <Container>
        {posts.map((post, index) => (
            <ListItemWrapper key={index}>
                <PostCard {...post} />
            </ListItemWrapper>
        ))}
    </Container>
)

export default PostCardList 
