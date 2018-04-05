import * as React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import theme from 'utils/theme'

interface HeaderProps {
    title: string
    fixed?: boolean
}

interface HeaderState {
    hide: boolean,
    pageYOffset: number
}

export default class Header extends React.PureComponent<HeaderProps, HeaderState> {
    static defaultProps: Partial<HeaderProps> = {
        fixed: false,
    }

    state = {
        hide: false,
        pageYOffset: 0,
    }

    handleScroll = () => {
        const { pageYOffset } = window
        const deltaY = pageYOffset - this.state.pageYOffset
        const hide = pageYOffset !== 0 && deltaY >= 0

        this.setState({ hide, pageYOffset })
    }

    componentDidMount() {
        if (!this.props.fixed) {
            window.addEventListener('scroll', this.handleScroll)
        }
    }

    componentWillUnmount() {
        if (!this.props.fixed) {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }

    render() {
        return (
            <Container className={this.state.hide ? 'hide' : ''}>
                <HomeLink to='/'>{this.props.title}</HomeLink>
            </Container>
        )
    }
}

const Container = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    margin: 0;
    width: 100%;
    height: ${theme.headerHeight};
    background: #fff;
    border-bottom: 1px solid ${theme.grayColor};
    transition: transform .5s ease;
    z-index: 2;

    &.hide {
        transform: translateY(-${theme.headerHeight});
    }
`

const HomeLink = styled(Link) `
    position: absolute;
    left: 1.25rem;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.blackColor};
`
