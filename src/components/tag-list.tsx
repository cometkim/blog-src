import * as React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import theme from 'utils/theme'

export interface TagListProps {
    tags: string[]
}

export default ({ tags }: TagListProps) => (
    <TagList>
        {tags.map((tag, index) => (
            <Link to={`/tags/${tag}`}>
                <TagItem key={index}>{tag}</TagItem>
            </Link>
        ))}
    </TagList>
)

const TagList = styled.ul`
    margin: 0;
    padding-left: 0;
    list-style: none;
`

const TagItem = styled.li`
    float: left;
    font-size: .75rem;
    background-color: ${theme.grayColor};
    border-radius: 3px;
    margin: .2rem;
    padding: .15rem .6rem;
`
