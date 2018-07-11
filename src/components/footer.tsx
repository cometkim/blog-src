import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import theme from 'utils/theme'

export type FooterProps = {
    owner: string;
}

export default ({ owner }: FooterProps) => (
    <Container>
        <Section>
            {`© 2018 `}
            <Link to='/about/'>{owner}</Link>
        </Section>
        <Section>
            {`Powered by `}
            <a href='https://gatsbyjs.org' target='_blank'>GatsbyJS</a>
        </Section>
        <Section>
            {`Hosted by `}
            <a href='https://netlify.com' target='_blank'>Netlify</a>
        </Section>
        <Section>
            {`Source code on `}
            <a href='https://github.com/cometkim/blog-src' target='_blank'>GitHub</a>
        </Section>
    </Container>
)

const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;
    height: 3rem;
`

const Section = styled.section`
    text-align: center;

    &, a {
        font-size: .8rem;
        color: darkgray;
    }

    & + :before {
        content: '\u00B7';
        margin: 0 .1rem;
    }

    a {
        font-weight: bold;
        text-decoration: none;
    }
`
