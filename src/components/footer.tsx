import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

interface FooterProps {
    owner: string;
}

const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;
    height: 3rem;
`

const Section = styled.div`
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

const Footer: React.FC<FooterProps> = ({ owner }) => (
    <Container>
        <Section>
            {`© 2018 `}
            <Link to='/about/'>{owner}</Link>
        </Section>
        <Section>
            {`Powered by `}
            <a href='https://gatsbyjs.org' target='_blank' rel='noopener noreferrer'>
                GatsbyJS
            </a>
        </Section>
        <Section>
            {`Hosted by `}
            <a href='https://netlify.com' target='_blank' rel='noopener noreferrer'>
                Netlify
            </a>
        </Section>
        <Section>
            {`Source code on `}
            <a href='https://github.com/cometkim/blog-src' target='_blank' rel='noopener noreferrer'>
                GitHub
            </a>
        </Section>
    </Container>
)

export default Footer
