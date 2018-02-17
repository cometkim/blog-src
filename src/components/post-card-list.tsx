import * as React from 'react'
import styled from 'styled-components'

import PostCard, { PostCardProps } from './post-card'

import theme from 'utils/theme'
import { injectAllMarkdownRemark } from 'utils/post-utils'

export interface PostCardListProps {
    props: Array<PostCardProps>
}

export const PostCardListComponent = ({ props: posts }: PostCardListProps) => (
    <PostCardList>
        {posts.map((props, index) => (
            <PostCardItem key={index}>
                <PostCard {...props} />
            </PostCardItem>
        ))}
    </PostCardList>
)

const PostCardList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 0 ${theme.contentSidePadding};
`

const PostCardItem = styled.li`
    padding-bottom: 28px;
    border-bottom: 1px solid ${theme.grayColor};
`

export default injectAllMarkdownRemark(PostCardListComponent)
