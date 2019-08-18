import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import theme from '~/src/utils/theme';
import { useScrollState } from '~/src/hooks/use-scroll-state';

interface HeaderProps {
  title: string
  fixed?: boolean
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
`;

const HomeLink = styled(Link)`
    position: absolute;
    left: 1.25rem;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.blackColor};
`;

const Header: React.FC<HeaderProps> = ({ title, fixed }) => {
  const scroll = useScrollState();
  return (
    <Container className={!fixed && scroll.accDeltaY > 15 ? 'hide' : ''}>
      <HomeLink to='/'>{title}</HomeLink>
    </Container>
  );
};

export default Header;
