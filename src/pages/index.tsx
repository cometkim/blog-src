import * as React from 'react'

import config from '../site-config';

import Header from '../components/header';
import ProfileCard from '../components/profile-card';
import PostCard from '../components/post-card';

export default ({ data }: IndexPageProps) => {
    const postCards = data.allMarkdownRemark.edges
        .map(edge => edge.node)
        .map(({ excerpt, frontmatter, internal }) => ({ excerpt, ...frontmatter, ...internal }))
        .map(props => (
            <li key={props.contentDigest}>
                <PostCard {...props} />
            </li>
        ))

    return [
        <Header key='header' title={config.title} />,
        <ProfileCard key='profile-card' />,
        <ul key='post-card-list'>{postCards}</ul>,
    ]
}

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
                        date
                        tags
                    }
                }
            }
        }
    }
`
