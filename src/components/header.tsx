import * as React from 'react'

import Link from 'gatsby-link'
import styled from 'styled-components'

import theme from 'utils/theme'

interface HeaderProps {
    title: string
}

export default ({ title }: HeaderProps) => (
    <Header>
        <TitleLink to='/'>
            <Title>{title}</Title>
        </TitleLink>
    </Header>
)

const Header = styled.header`
    margin: 0 auto;
    max-width: ${theme.contentMaxWidth};
`

const TitleLink = styled(Link) `
    text-decoration: none;
    color: black;
`

const Title = styled.h1`
    font-size: 24px;
    margin-left: 20px;
`