import * as React from 'react'

import styled from 'styled-components'

import config from 'site-config';
import { Header, PostCard, ProfileCard } from 'components';

interface IndexPageProps {
    data: {
        allMarkdownRemark: AllMarkdownRemark
    }
}

export default ({ data }: IndexPageProps) => {
    const postCards = data.allMarkdownRemark.edges
        .map(edge => edge.node)
        .map(({ excerpt, frontmatter, internal }) => ({ excerpt, ...frontmatter, ...internal }))
        .map(props => (
            <li key={props.contentDigest}>
                <PostCard {...props} />
            </li>
        ))

    return (
        <React.Fragment>
            <Header key='header' title={config.title} />
            <PostCardList key='post-card-list'>{postCards}</PostCardList>
        </React.Fragment>
    )
}

const PostCardList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
`

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    internal {
                        contentDigest
                    }
                    excerpt
                    frontmatter {
                        path
                        title
                        author
                        date(formatString: "YYYY년 M월 D일")
                        tags
                    }
                }
            }
        }
    }
`
