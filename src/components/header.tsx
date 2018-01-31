import * as React from 'react'

import Link from 'gatsby-link'
import styled from 'styled-components'

interface HeaderProps {
    title: string
}

const HeaderLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const HeaderTitle = styled.h2`
    margin-left: 20px;
`

export default ({ title }: HeaderProps) => {
    return (
        <header>
            <HeaderLink to='/'>
                <HeaderTitle>{title}</HeaderTitle>
            </HeaderLink>
        </header>
    )
}
