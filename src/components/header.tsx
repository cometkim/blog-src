import * as React from 'react'

import Link from 'gatsby-link'
import styled from 'styled-components'

interface HeaderProps {
    title: string
}

export default ({ title }: HeaderProps) => (
    <header>
        <TitleLink to='/'>
            <Title>{title}</Title>
        </TitleLink>
    </header>
)

const TitleLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const Title = styled.h1`
    font-size: 24px;
    margin-left: 20px;
`