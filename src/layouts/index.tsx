import * as React from 'react'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'

import { SiteHelmet } from 'components'

import 'assets/spoqa-han-sans-kr.css'
import 'assets/source-code-pro.css'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
    @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

    body {
        font-family: 'Noto Sans KR', sans-serif;
    }

    pre, code {
        font-family: 'Source Code Pro', monospace;
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
