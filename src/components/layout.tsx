import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

import { SiteHelmet } from 'components'
import theme from 'utils/theme'

import 'assets/hack-subset.css'

interface LayoutProps {
    children: any
}

export default ({ children }: LayoutProps) => (
    <StaticQuery
        query={graphql`
            query LayoutQuery {
                site {
                    siteMetadata {
                        siteUrl
                        title
                        description
                        author: owner {
                            name
                            email
                        }
                        keywords
                    }
                }
            }
        `}
        render={({ site: { siteMetadata } }) => (
            <>
                {/* 사이트 기본 메타 정보는 대부분의 페이지에서 Override 되며, 생략된 경우만 사용 */}
                <SiteHelmet {...siteMetadata}/>
                {createGlobalStyle`
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
                `}
                {children}
            </>
        )}
    />
)
