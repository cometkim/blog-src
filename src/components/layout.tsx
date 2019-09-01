import React from 'react';
import { Global, css } from '@emotion/core';

import theme from '~/src/utils/theme';
import { useSiteMetadata } from '~/src/hooks/use-site-metadata';
import { ScrollStateProvider } from '~/src/hooks/use-scroll-state';
import { SiteHelmet } from '~/src/components';
import '~/src/assets/hack-subset.css';

const GlobalStyle: React.FC = () => (
  <Global styles={css`
    @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

    body {
        font-family: 'Noto Sans KR', sans-serif;
        word-break: keep-all;
        color: ${theme.blackColor};
        -webkit-font-smoothing: antialiased;
    }

    a {
        color: ${theme.blackColor};
        text-decoration: none;
        transition: color .2s ease;

        :focus, :hover, :active {
            color: ${theme.primaryColor};
        }
    }

    pre, code {
        font-family: 'Hack', monospace;
    }

    html, body {
        margin: 0;
    }
  `}/>
);

const Layout: React.FC = ({ children }) => {
  const siteMetadata = useSiteMetadata();
  return (
        <>
            {/* 사이트 기본 메타 정보는 대부분의 페이지에서 Override 되며, 생략된 경우만 사용 */}
            <SiteHelmet {...siteMetadata}/>
            <GlobalStyle/>
            <ScrollStateProvider>
              {children}
            </ScrollStateProvider>
        </>
  );
};

export default Layout;
