import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Layout } from 'components'

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`

const Description = styled.div`
    font-size: 1.3rem;
`

const NotFoundPage: React.FC = () => (
    <Layout>
        <Container>
            <h1>¯\_(ツ)_/¯</h1>
            <Description>404... 요청하신 페이지를 찾을 수 없습니다. </Description>
            <Link to='/'>홈으로 돌아가기</Link>
        </Container>
    </Layout>
)

export default NotFoundPage
