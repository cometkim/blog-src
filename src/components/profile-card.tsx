import * as React from 'react'

import Link from 'gatsby-link'
import styled from 'styled-components'

import config from '../site-config'

interface ProfileCardProps {

}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Picture = styled.img`
    border-radius: 100px;
    margin-right: 20px;
`

const Description = styled.div`
`

export default (props: ProfileCardProps) => {
    return (
        <Container>
            <Picture src='//www.gravatar.com/avatar/f8926983e9d37ea2f6ffba6575fad143' />
            <Description>
                <strong>{config.name}</strong>
                <div>{config.email}</div>
                <a href={`https://github.com/${config.github}`} target='_blank'>GitHub</a>
                {' | '}
                <a href={`https://twitter.com/${config.twitter}`} target='_blank'>Twitter</a>
            </Description>
        </Container>
    )
}