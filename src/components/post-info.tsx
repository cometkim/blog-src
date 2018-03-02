import * as React from 'react'
import styled from 'styled-components'

import TagList from './tag-list'

interface PostInfoProps {
    author: string
    date: string
    tags: string[]
}

export default ({ author, date, tags }: PostInfoProps) => (
    <>
        <Container>
            <Info>{author}</Info>
            <Info><time>{date}</time></Info>
        </Container>
        <TagList tags={tags} />
    </>
)

const Container = styled.div`
    margin: .5rem 0;
`

const Info = styled.span`
    & + :before {
        content: '\u00B7';
        margin: 0 .25rem;
    }
`
