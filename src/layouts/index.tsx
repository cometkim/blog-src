import * as React from 'react'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'

import { SiteHelmet } from 'components'
import theme from 'utils/theme'

import 'assets/hack-subset.css'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
    @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

    body {
        font-family: 'Noto Sans KR', sans-serif;
        color: ${theme.blackColor};
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
`

interface DefaultLayoutProps extends SiteData {
    children: any
}

export default ({ data: { site }, children }: DefaultLayoutProps) => {
    const { siteUrl, title, description, owner, keywords } = site.siteMetadata

    return (
        <>
            {/* 사이트 기본 메타 정보는 대부분의 페이지에서 Override 되며, 생략된 경우만 사용 */}
            <SiteHelmet
                url={siteUrl}
                title={title}
                description={description}
                author={owner}
                keywords={keywords}
            />

            {children()}
        </>
    )
}

export const pageQuery = graphql`
    query RootQuery {
        site {
            siteMetadata {
                siteUrl
                title
                description
                keywords
                owner {
                    name
                    email
                }
            }
        }
    }
`
