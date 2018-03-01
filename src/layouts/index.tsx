import * as React from 'react'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'

import 'assets/spoqa-han-sans-kr.css'
import 'assets/source-code-pro.css'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
    body {
        font-family: 'Spoqa Han Sans', sans-serif;
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
    const { title, description, owner, keywords } = site.siteMetadata

    return (
        <>
            <Helmet>
                {/* 사이트 기본 메타 정보는 대부분의 페이지에서 Override 되며, 생략된 경우만 사용 */}
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='author' content={`${owner.name} <${owner.email}>`} />
                <meta name='keywords' content={keywords.join(', ')} />
            </Helmet>

            {children()}
        </>
    )
}

export const pageQuery = graphql`
    query RootQuery {
        site {
            siteMetadata {
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
