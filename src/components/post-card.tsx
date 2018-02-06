import * as React from 'react'

import Link from 'gatsby-link'

interface PostCardProps {
    path: string
    title: string
    author: string
    date: string
    tags: Array<string>
    excerpt: string
}

export default ({ path, title, author, date, tags, excerpt }: PostCardProps) => (
    <div>
        <Link to={path}>{title}</Link>
        <div>{date}</div>
        <ul>
            {tags.map((tag, index) =>
               <li key={index}>{tag}</li>
            )}
        </ul>
        <div>{excerpt}</div>
    </div>
)