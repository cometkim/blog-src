import * as React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

export default () => (
    <Container>
        <Shrug>¯\_(ツ)_/¯</Shrug>
        <Description>404... 요청하신 페이지를 찾을 수 없습니다. </Description>
        <Link to='/'>홈으로 돌아가기</Link>
    </Container>    
)

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`

const Shrug = styled.h1`
`

const Description = styled.div`
    font-size: 1.3rem;
`
