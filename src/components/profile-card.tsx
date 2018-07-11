import * as React from 'react'
import styled from 'styled-components'

interface ProfileCardProps {
    picUrl: string
    name: string
    email: string
    github: string
    twitter: string
}

export default ({ picUrl, name, email, github, twitter }: ProfileCardProps) => (
    <Container>
        <Picture src={picUrl} />
        <Description>
            <strong>{name}</strong>
            <div>{email}</div>
            <a href={`https://github.com/${github}`} target='_blank'>GitHub</a>
            {' | '}
            <a href={`https://twitter.com/${twitter}`} target='_blank'>Twitter</a>
        </Description>
    </Container>
)

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
