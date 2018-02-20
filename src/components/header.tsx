import * as React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import theme from 'utils/theme'

interface HeaderProps {
    title: string
}

export default ({ title }: HeaderProps) => (
    <Header>
        <HomeLink to='/'>{title}</HomeLink>
    </Header>
)

const Header = styled.header`
    display: flex;
    align-items: center;
    margin: 0;
    height: 60px;
    border-bottom: 1px solid ${theme.grayColor};
`

const HomeLink = styled(Link) `
    position: absolute;
    left: 20px;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    color: black;
`
