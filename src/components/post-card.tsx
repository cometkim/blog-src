import * as React from 'react'

import styled from 'styled-components'
import Link from 'gatsby-link'

import theme from 'utils/theme'

export interface PostCardProps {
    path: string
    title: string
    author: string
    date: string
    tags: Array<string>
    excerpt: string
}

export default ({ path, title, author, date, tags, excerpt }: PostCardProps) => (
    <Container>
        <GoToPost to={path}>
            <Title>{title}</Title>
            <Excerpt>{excerpt}</Excerpt>
        </GoToPost>
        <Section>
            <Meta><time>{date}</time></Meta>
            <Meta>{author}</Meta>
        </Section>
        <TagList>
            {tags.map((tag, index) =>
                <TagItem key={index}>{tag}</TagItem>
            )}
        </TagList>
    </Container>
)

const Container = styled.div`
    overflow: hidden;
    max-width: ${theme.contentMaxWidth};
`

const GoToPost = styled(Link) `
    text-decoration: none;
    color: black;

    :hover {
        text-decoration: underline;
    }
`

const Title = styled.h3`
    margin-bottom: 0;
`

const Excerpt = styled.p`
`

const Section = styled.section`
    margin: 10px 0;
`

const Meta = styled.span`
    margin-right: 10px;
`

const TagList = styled.ul`
    padding-left: 0;
    list-style: none;
`

const TagItem = styled.li`
    float: left;
    font-size: 12px;
    background-color: ${theme.grayColor};
    border-radius: 3px;
    margin-right: 8px;
    padding: 2px 10px;
`
